from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import replicate
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Prompt(BaseModel):
    prompt: str

@app.post("/generate")
async def generate_image(prompt: Prompt):
    output = replicate.run(
        "stability-ai/stable-diffusion",
        input={"prompt": prompt.prompt}
    )
    return {"url": output[0] if isinstance(output, list) else output}