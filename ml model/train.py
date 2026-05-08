import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
import pickle

print("Starting training...")

# Load dataset
data = pd.read_csv("data.csv")

print("Dataset loaded")

# Split input and output
X = data["text"]
y = data["mood"]

# Convert text into numbers
vectorizer = TfidfVectorizer()
X_vectorized = vectorizer.fit_transform(X)

print("Text vectorized")

# Train model
model = LogisticRegression()
model.fit(X_vectorized, y)

print("Model trained")

# Save model
with open("model.pkl", "wb") as f:
    pickle.dump(model, f)

# Save vectorizer
with open("vectorizer.pkl", "wb") as f:
    pickle.dump(vectorizer, f)

print("Model and vectorizer saved successfully!")