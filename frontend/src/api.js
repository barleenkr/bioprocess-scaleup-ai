import axios from "axios";

const API = axios.create({
  baseURL: "https://bioprocess-scaleup-ai.onrender.com"
});

export const predictProcess = (data) => API.post("/predict", data);