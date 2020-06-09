import time
from flask import Flask

app = Flask(__name__)

# An endpoint to get the current time
@app.route('/time')
def get_current_time():
    return {'time': time.time()}
