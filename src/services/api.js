import axios from "axios";

const API = axios.create({
  baseURL :import.meta.env.VITE_BACKEND_API_URL +"/api/resume",
});

export const uploadResume = (formData) =>
  API.post("/upload", formData);

export const analyzeResume = (data) =>
  API.post("/analyze", data);