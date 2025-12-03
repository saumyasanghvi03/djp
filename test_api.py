import requests
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("VITE_PERPLEXITY_API_KEY")
print(f"API Key found: {api_key[:10]}...")

url = "https://api.perplexity.ai/chat/completions"
headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}
models_to_test = [
    "sonar",
    "sonar-pro",
    "llama-3.1-sonar-small-128k-online",
    "llama-3.1-sonar-large-128k-online",
    "llama-3.1-sonar-huge-128k-online"
]

for model in models_to_test:
    print(f"\nTesting model: {model}")
    payload = {
        "model": model,
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Hello"}
        ],
        "temperature": 0.7
    }

    try:
        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status()
        print(f"SUCCESS with {model}!")
        print(response.json())
        break # Stop after first success
    except requests.exceptions.HTTPError as e:
        print(f"FAILED with {model}: {e}")
        print(f"Response: {response.text}")
    except Exception as e:
        print(f"Error: {e}")
