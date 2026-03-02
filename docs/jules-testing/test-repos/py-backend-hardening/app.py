from flask import Flask, jsonify, request

app = Flask(__name__)

USERS = []


@app.get('/users')
def list_users():
    return jsonify(USERS)


@app.post('/users')
def create_user():
    body = request.get_json(silent=True) or {}
    user = {
        'id': len(USERS) + 1,
        'name': body.get('name', ''),
        'email': body.get('email', ''),
    }
    USERS.append(user)
    return jsonify(user), 201


if __name__ == '__main__':
    app.run(port=5010, debug=True)
