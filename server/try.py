from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO
from libs.llm import trial

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret1'
socketio = SocketIO(app, cors_allowed_origins="*")
CORS(app)


@socketio.on('connect')
def connect():
    print("Connection Established")


@socketio.on('request')
def hello(msg):
    trial(msg)
    return ""


@app.route("/")
def home():
    return ""


if __name__ == '__main__':
    socketio.run(app)
