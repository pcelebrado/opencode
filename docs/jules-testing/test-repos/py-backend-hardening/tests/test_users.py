from app import app, USERS


def setup_function():
    USERS.clear()


def test_create_user_success():
    client = app.test_client()
    res = client.post('/users', json={'name': 'Nexus', 'email': 'nexus@test.local'})
    assert res.status_code == 201


def test_duplicate_email_should_fail():
    client = app.test_client()
    client.post('/users', json={'name': 'Nexus', 'email': 'nexus@test.local'})
    res = client.post('/users', json={'name': 'N2', 'email': 'nexus@test.local'})
    assert res.status_code == 409


def test_empty_name_should_fail():
    client = app.test_client()
    res = client.post('/users', json={'name': '', 'email': 'x@test.local'})
    assert res.status_code == 400
