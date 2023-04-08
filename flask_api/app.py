from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/words', methods=['POST'])
def get_words():
    text = request.json['text']
    words = text.split()
    return jsonify({'related_words': words,
                    'unrelated_words': words})

if __name__ == '__main__':
    app.run(debug=True)