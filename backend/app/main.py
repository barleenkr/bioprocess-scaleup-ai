from fastapi import FastAPI
from app.schemas import ProcessInput
from app.predictor import predict_scaleup

app = FastAPI(
    title="AI Bioprocess Scale-Up Predictor",
    description="Predicts scale-up parameters for industrial bioprocesses",
    version="1.0"
)

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Bioprocess Scale-Up AI is running 🚀"}

@app.post("/predict")
def predict(data: ProcessInput):
    result = predict_scaleup(data)
    return result