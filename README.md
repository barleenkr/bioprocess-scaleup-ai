# 🧬 AI-Assisted Bioprocess Scale-Up Decision System

An AI-powered web application designed to assist in bioprocess scale-up by predicting oxygen transfer efficiency (**kLa**), assessing risks, and suggesting optimization strategies.

---

## 🌐 Live Demo

👉 https://your-vercel-link.vercel.app

⚠️ Note: The backend is hosted on a free tier and may take **10–20 seconds** to respond on the first request (cold start).

---

## 🚀 Key Features

- 🔬 Predicts oxygen transfer coefficient (**kLa**)
- ⚠️ Classifies scale-up risk (**Low / Moderate / High**)
- 💡 Provides optimization recommendations
- 📊 Visualizes scale-up progression (Lab → Pilot → Industrial)
- 🎯 Displays confidence score for predictions
- 🎚️ Interactive UI with sliders and controls

---

## 🧠 Problem Statement

Scaling up a bioprocess from lab to industrial scale is challenging due to:

- Variations in oxygen transfer (kLa)
- Mixing and mass transfer limitations
- Biological variability

This system aims to **reduce trial-and-error experiments** by providing **data-driven predictions and insights**.

---

## ⚙️ How It Works

### Inputs:
- Organism type  
- Reactor volume  
- Agitation speed  
- Aeration rate  
- Temperature  
- pH  
- Substrate concentration  

### Outputs:
- Predicted kLa value  
- Risk level assessment  
- Optimization recommendation  
- Confidence score  
- Scale-up visualization  

---

## 🏗️ System Architecture
Frontend (React + Tailwind + Vercel)
↓
Backend API (FastAPI + Render)
↓
Machine Learning Model (Scikit-learn

---


---

## 🧪 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Framer Motion
- Recharts

### Backend
- FastAPI
- Uvicorn

### Machine Learning
- Scikit-learn (Random Forest)
- NumPy, Pandas

---

## 📦 Project Structure
bioprocess-scaleup-ai/
│
├── backend/
│ ├── app/
│ ├── trained_model/
│ ├── train.py
│ └── requirements.txt
│
├── frontend/
│ ├── src/
│ └── package.json


---

## ▶️ Running Locally

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
## Frontend

```bash
cd frontend
npm install
npm run dev
