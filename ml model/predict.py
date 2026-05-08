import pickle

# Load model
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

# Load vectorizer
with open("vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

# Take input
text = input("Enter your mood: ")

# Transform text
text_vectorized = vectorizer.transform([text])

# Predict
prediction = model.predict(text_vectorized)

print("Predicted Mood:", prediction[0])