from fastapi import APIRouter, Form
from services.ai_inference import generate_image

router = APIRouter()

@router.post("/")
async def generate(prompt: str = Form(...)):
    image_url = generate_image(prompt)
    return {"image_url": image_url}