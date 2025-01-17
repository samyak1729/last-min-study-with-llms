from fastapi import FastAPI
from pydantic import BaseModel
from groq import Groq
from decouple import config

app = FastAPI()

client = Groq(api_key = config("GROQ_API_KEY"))

class ChatRequest(BaseModel):
    prompt: str
    max_tokens: int
    temperature: float =0.7

class ChatResponse(BaseModel):
    completion: str


@app.post("/generate", response_model = ChatResponse)
async def generate(request: ChatRequest):
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": request.prompt,
            }
        ],
        model="llama-3.3-70b-versatile",
    )

    completion = chat_completion.choices[0].message.content

    return ChatResponse(completion = completion)

