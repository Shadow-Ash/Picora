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

# ⚙️ Installation

## 1️⃣ Clone the repository

```bash
git clone https://github.com/Shadow-Ash/picora.git
cd picora
npm install

Create a file:

.env.local

Add your Gemini API key like below

GEMINI_API_KEY=your_gemini_api_key_here (make sure you activate the billing account of your api key and check the rate limits of Nano Banana)

GEMINI_API_KEY=AIzaSyXXXXX

npm run dev

http://localhost:3000

```

## Architecture

Picora converts text into visuals using a structured AI generation pipeline.

User Input (Tweet)
        ↓
Prompt Compiler
        ↓
Style Preset Engine
        ↓
Model Router
        ↓
Gemini Image Models
        ↓
Image Parser
        ↓
Frontend Result

### Model Usage Flow

Primary Model
    gemini-3-pro-image-preview   (Nano Banana Pro)

Fallback Models
    gemini-2.5-flash-image       (Nano Banana)
    gemini-3.1-flash-image       (Fallback)

The model router automatically switches models if the primary model hits quota limits.

## Style Presets

Picora allows users to control the visual style of generated images.

The selected preset is injected into the prompt before sending it to the image model.

Supported presets:

Auto
Cinematic
Cyberpunk
Anime
Realistic
Illustration

Example Flow

User Tweet
"coding late at night with coffee"

Preset
Cyberpunk

Compiled Prompt
"coding late at night with coffee, neon lights, cyberpunk city atmosphere, futuristic lighting"

👨‍💻 Author

Built by Shadow Ash

Visualize Your Voice.
⭐ Support

If you like this project, consider starring the repo!

---
