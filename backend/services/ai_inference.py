import os
import requests

def generate_image(prompt: str):
    url = "https://api.replicate.com/v1/predictions"
    headers = {
        "Authorization": f"Token {os.getenv('REPLICATE_API_TOKEN')}",
        "Content-Type": "application/json"
    }
    payload = {
        "version": "db21e45d3d63c7805e9d59b83c9d52d78558b09a457b2b3d5d80f70d5e2f18f7",
        "input": {"prompt": prompt}
    }
    response = requests.post(url, json=payload, headers=headers)
    if response.status_code == 201:
        prediction = response.json()
        prediction_url = prediction["urls"]["get"]
        import time
        while True:
            poll = requests.get(prediction_url, headers=headers).json()
            if poll["status"] == "succeeded":
                return poll["output"][0]
            elif poll["status"] == "failed":
                return ""
            time.sleep(1)
    return ""