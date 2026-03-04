# Picora — Visualize Your Voice ✨

Picora is an AI-powered web app that converts tweets or text into visual images using Google's Gemini models.

Users paste a tweet, choose a style preset, and Picora generates a matching AI image.

---

## 🚀 Features

- ✏️ Paste a tweet or text
- 🎨 Style presets (Cinematic, Cyberpunk, Anime, etc.)
- 🤖 AI prompt generation
- 🖼️ Image generation via Gemini models
- 🔄 Regenerate images
- ⬇️ Download generated image
- 📋 Copy generated prompt
- 🌙 Dark mode UI
- ⚡ Optimized Next.js architecture

---

## 🧠 How Picora Works


User Tweet
↓
Prompt Compiler
↓
Style Preset Engine
↓
Gemini Prompt Generation
↓
Gemini Image Model (Nano Banana Pro)
↓
Image Returned to UI


---

## 🛠 Tech Stack

- **Next.js 16**
- **React**
- **Tailwind CSS**
- **Google Gemini API**
- **TypeScript**
- **App Router API routes**
- 

# ⚙️ Installation

## 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/picora.git
cd picora
2️⃣ Install dependencies
npm install
3️⃣ Create environment file

Create a file:

.env.local

Add your Gemini API key:

GEMINI_API_KEY=your_gemini_api_key_here

Environment variables keep your API key secure and prevent it from being committed to the repository.

4️⃣ Get a Gemini API Key

Go to Google AI Studio

Generate an API key

Paste it into .env.local

Example:

GEMINI_API_KEY=AIzaSyXXXXX
5️⃣ Run the development server
npm run dev

Open:

http://localhost:3000
🎨 Style Presets

Picora supports different visual styles:

Auto

Cinematic

Cyberpunk

Anime

Realistic

Illustration

These styles are injected into the AI prompt before image generation.

📸 Demo

Add screenshots here for GitHub:

/screenshots/app.png
/screenshots/generation.png

Example:

![Picora App](./screenshots/app.png)
🔐 Security

API keys are stored in .env.local

.env.local should never be committed to GitHub

Add this to .gitignore:

.env.local
🚀 Future Improvements

Image history gallery

Prompt editing

Image upscaling

Social sharing

Authentication

Prompt templates

👨‍💻 Author

Built by Shadow Ash

Visualize Your Voice.
⭐ Support

If you like this project, consider starring the repo!

---
