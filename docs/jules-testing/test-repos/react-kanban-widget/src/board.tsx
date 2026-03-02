import { useState } from 'react';

type Card = { id: string; title: string; status: 'todo' | 'doing' | 'done' };

const initial: Card[] = [
  { id: 'c1', title: 'Draft PR copy', status: 'todo' },
  { id: 'c2', title: 'Verify phase3 build', status: 'doing' },
  { id: 'c3', title: 'Post maintainer update', status: 'done' },
];

export function Board() {
  const [cards, setCards] = useState(initial);

  const move = (id: string, status: Card['status']) => {
    setCards(cards.map((c) => (c.id === id ? { ...c, status } : c)));
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
      {(['todo', 'doing', 'done'] as const).map((col) => (
        <section key={col}>
          <h3>{col.toUpperCase()}</h3>
          {cards
            .filter((c) => c.status === col)
            .map((card) => (
              <article key={card.id}>
                <p>{card.title}</p>
                <button onClick={() => move(card.id, 'todo')}>To Do</button>
                <button onClick={() => move(card.id, 'doing')}>Doing</button>
                <button onClick={() => move(card.id, 'done')}>Done</button>
              </article>
            ))}
        </section>
      ))}
    </div>
  );
}
