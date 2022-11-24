import pytest
import main

@pytest.fixture
def client():
    main.app.testing = True
    return main.app.test_client()

def test_handler(client):
    r = client.get("/")
    assert r.data.decode() == "Hello World"
