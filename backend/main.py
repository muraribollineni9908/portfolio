
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv
from pathlib import Path
import resend
import os
import html

# Load environment variables
env_path = Path(__file__).resolve().parent / ".env"
load_dotenv(env_path)

# Initialize FastAPI
app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Resend configuration
api_key = os.getenv("RESEND_API_KEY")

if not api_key:
    raise RuntimeError("RESEND_API_KEY is missing from .env")

resend.api_key = api_key


# Contact form model
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str


# Home route
@app.get("/")
def home():
    return {
        "message": "Portfolio backend is running"
    }


# Contact route
@app.post("/contact")
def send_email(data: ContactForm):

    params = {
        "from": "Portfolio <onboarding@resend.dev>",

        "to": ["murarinagaprasadbollineni@gmail.com"],

        "subject": f"Portfolio: {data.subject}",

        "html": f"""
            <h2>New Portfolio Message</h2>

            <p>
                <b>Name:</b>
                {html.escape(data.name)}
            </p>

            <p>
                <b>Email:</b>
                {html.escape(str(data.email))}
            </p>

            <p>
                <b>Subject:</b>
                {html.escape(data.subject)}
            </p>

            <p>
                <b>Message:</b>
                {html.escape(data.message)}
            </p>
        """
    }

    try:
        result = resend.Emails.send(params)

        return {
            "success": True,
            "message": "Email sent successfully",
            "email_id": result["id"]
        }

    except Exception as e:
        print("Resend error:", str(e))

        raise HTTPException(
            status_code=500,
            detail="Email delivery failed. Please try again."
        )
