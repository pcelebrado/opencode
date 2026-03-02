import { describe, expect, test } from "bun:test"
import { Bus } from "../../src/bus"
import { parseSSE } from "../../src/control-plane/sse"
import { Instance } from "../../src/project/instance"
import { Server } from "../../src/server/server"
import { SessionStatus } from "../../src/session/status"
import { Log } from "../../src/util/log"
import { tmpdir } from "../fixture/fixture"

Log.init({ print: false })

function eventStatus(event: unknown) {
  if (!event || typeof event !== "object") return
  if (!("type" in event) || event.type !== "session.status") return
  if (!("properties" in event) || !event.properties || typeof event.properties !== "object") return
  const { sessionID } = event.properties as { sessionID?: unknown }
  if (typeof sessionID !== "string") return
  return sessionID
}

async function collectEvents(input: {
  path: string
  publish: () => Promise<void>
}) {
  const stop = new AbortController()
  const seen: unknown[] = []
  const app = Server.App()
  const response = await app.request(input.path, {
    signal: stop.signal,
  })

  expect(response.status).toBe(200)
  expect(response.body).toBeDefined()

  await new Promise<void>((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error("timed out waiting for session.status events"))
    }, 3000)
    void parseSSE(response.body!, stop.signal, (event) => {
      seen.push(event)
      const next = event as { type?: string }
      if (next.type !== "server.connected") return
      void input.publish().catch(reject)
      setTimeout(() => {
        clearTimeout(timeout)
        resolve()
      }, 20)
    }).catch((error) => {
      clearTimeout(timeout)
      reject(error)
    })
  })

  stop.abort()
  return seen
}

describe("server /event subscription", () => {
  test("filters to a single session when sessionID query is provided", async () => {
    await using tmp = await tmpdir()
    await Instance.provide({
      directory: tmp.path,
      fn: async () => {
        const target = "ses_target"
        const result = await collectEvents({
          path: `/event?directory=${encodeURIComponent(tmp.path)}&sessionID=${target}`,
          publish: async () => {
            await Bus.publish(SessionStatus.Event.Status, {
              sessionID: "ses_other",
              status: { type: "busy" },
            })
            await Bus.publish(SessionStatus.Event.Status, {
              sessionID: target,
              status: { type: "busy" },
            })
          },
        })

        const statuses = result.map(eventStatus).filter(Boolean)
        expect(statuses).toContain(target)
        expect(statuses).not.toContain("ses_other")
      },
    })
  })

  test("keeps prior behavior when sessionID query is omitted", async () => {
    await using tmp = await tmpdir()
    await Instance.provide({
      directory: tmp.path,
      fn: async () => {
        const result = await collectEvents({
          path: `/event?directory=${encodeURIComponent(tmp.path)}`,
          publish: async () => {
            await Bus.publish(SessionStatus.Event.Status, {
              sessionID: "ses_alpha",
              status: { type: "busy" },
            })
            await Bus.publish(SessionStatus.Event.Status, {
              sessionID: "ses_beta",
              status: { type: "busy" },
            })
          },
        })

        const statuses = result.map(eventStatus).filter(Boolean)
        expect(statuses).toContain("ses_alpha")
        expect(statuses).toContain("ses_beta")
      },
    })
  })
})
