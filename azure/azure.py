from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

# Load environment variables (API key and endpoint)
load_dotenv()

app = Flask(__name__)
CORS(app)

# Get Azure OpenAI API key and endpoint from environment variables
API_KEY = os.getenv("AZURE_OPENAI_API_KEY")
ENDPOINT = os.getenv("AZURE_OPENAI_ENDPOINT")

# Function to call Azure OpenAI API and generate improved notes
def generate_improved_notes(prompt):
    headers = {
        "Content-Type": "application/json",
        "api-key": API_KEY
    }
    data = {
        "prompt": prompt,
        "max_tokens": 500,
        "temperature": 0.7,
    }
    response = requests.post(f"{ENDPOINT}/openai/deployments/YOUR_DEPLOYMENT_NAME/completions?api-version=2023-05-15", 
                             json=data, headers=headers)
    return response.json()["choices"][0]["text"]

# Route to handle file upload and notes improvement
@app.route("/upload-notes", methods=["POST"])
def upload_notes():
    prompt = ""

    # Get text input
    text_input = request.form.get("textInput")

    # If a file is uploaded, process the file content as text
    file = request.files.get("file")
    if file:
        prompt = file.read().decode("utf-8")
    else:
        prompt = text_input

    # Call Azure OpenAI API to improve notes
    try:
        improved_notes = generate_improved_notes(prompt)
        return jsonify({"improvedNotes": improved_notes})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)
