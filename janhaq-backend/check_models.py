import google.generativeai as genai
from dotenv import load_dotenv
import os

# Load your Google API key from .env
load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# List models that support generateContent
print("\nAvailable Gemini models supporting generateContent:\n")
for m in genai.list_models():
    if "generateContent" in m.supported_generation_methods:
        print(m.name)
