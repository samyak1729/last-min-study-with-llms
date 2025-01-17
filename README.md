
# quiz-notes-generator

api backend for an ai-powered "last-minute study" app. generates topic-based notes + quiz questions.

## stack
- fastapi: lightweight async web framework.
- pydantic: schema validation, type hints.
- groq: llm integration for text gen.
- python-decouple: env var mgmt.

## install
1. clone repo.
2. `python -m venv venv && source venv/bin/activate` (win: `venv\Scripts\activate`).
3. `pip install -r requirements.txt`.
4. create `.env` w/ `GROQ_API_KEY=<your_key>`.

## run
`uvicorn app.main:app --reload`  
docs at `/docs`.


## future
frontend next. db support later. auth maybe.

