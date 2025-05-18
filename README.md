# desidesign.ai

## Project Structure

```
DesiDesignMVP/
├── backend/                # FastAPI app
│   ├── main.py             # Entry point
│   ├── routes/
│   │   └── generate.py     # Logo/poster generation endpoints
│   ├── services/
│   │   └── ai_inference.py # Interacts with Hugging Face / Replicate
│   └── models.py           # Pydantic models
├── frontend/               # React + TailwindCSS
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Generate.tsx
│   │   │   └── Pricing.tsx
│   │   └── components/
│   └── tailwind.config.js
├── README.md
└── requirements.txt
```