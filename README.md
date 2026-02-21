# 🚀 AI Resume Analyzer

An AI-powered Applicant Tracking System (ATS) that evaluates resumes against job descriptions using structured weighted scoring.

Built with **React (Vite)**, **Node.js (Express)**, and **Google Gemini API**.

---

## 🧠 Features

- 📄 Resume PDF parsing
- 🤖 AI-based resume evaluation
- ⚖️ Weighted ATS scoring system
- 📊 Category-wise score breakdown
- 🔵 Animated circular progress visualization
- 🟢 Hiring recommendation badge
- 🔁 Retry & fallback AI model logic
- 🌐 Full-stack deployment ready

---

## ⚙️ Tech Stack

### Frontend
- React (Vite)
- TailwindCSS
- Axios

### Backend
- Node.js
- Express
- Google Gemini API
- PDF parsing

---

## 🏗️ ATS Scoring Logic

The system evaluates candidates using weighted scoring:

- Technical Skills Match (50%)
- Relevant Experience (20%)
- Domain Relevance (15%)
- Education & Certifications (10%)
- Soft Skills (5%)

Returns structured JSON including:

- Overall match percentage
- Category breakdown scores
- Missing critical skills
- Strengths
- Improvement suggestions
- Hiring recommendation

---

## 📦 Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/ai-resume-analyzer.git