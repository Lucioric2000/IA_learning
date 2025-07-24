
from flask import Flask, render_template_string
import os

app = Flask(__name__)

@app.route('/')
def home():
    # Read and serve the HTML file
    with open('index.html', 'r', encoding='utf-8') as file:
        html_content = file.read()
    return html_content

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
