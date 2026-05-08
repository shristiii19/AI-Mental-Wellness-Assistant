from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
# Load model
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

# Load vectorizer
with open("vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

@app.route("/")
def home():
    return "Mental Wellness API Running"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    text = data["text"]

    text_vectorized = vectorizer.transform([text])
    prediction = model.predict(text_vectorized)

    return jsonify({"mood": prediction[0]})

if __name__ == "__main__":
    app.run(debug=True)