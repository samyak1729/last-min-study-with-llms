from fastapi import FastAPI
from pydantic import BaseModel
from groq import Groq
from decouple import config
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


client = Groq(api_key = config("GROQ_API_KEY"))

class ChatRequest(BaseModel):
    prompt: str
    max_tokens: int
    temperature: float =0.7

class ChatResponse(BaseModel):
    completion: str

@app.get("/")
def root():
    return {"message": "backend is running"}


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

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React app's origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

