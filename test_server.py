# testing server for hosting over local network

from flask import Flask, render_template

app = Flask(__name__, template_folder='', static_folder='')

@app.route('/')
def index():
    return render_template('index.html')

app.run("0.0.0.0")