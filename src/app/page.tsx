"use client";

import { useState } from "react";
import TweetInput from "@/components/workspace/TweetInput";
import ResultSection from "@/components/workspace/ResultSection";

export default function Home() {

  const [image, setImage] = useState<string>();
  const [prompt, setPrompt] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [tweet, setTweet] = useState("");

  const regenerate = async () => {

    if (!tweet) return;

    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tweet,
        style: "auto"
      })
    });

    const data = await res.json();

    setImage(data.image);
    setPrompt(data.prompt);

    setLoading(false);
  };

  return (
    <main className="flex flex-col items-center px-4 py-20">

      <div className="max-w-3xl w-full flex flex-col gap-10">

        <TweetInput
          setImage={setImage}
          setPrompt={setPrompt}
          setLoading={setLoading}
          setTweet={setTweet}
        />

        <ResultSection
          image={image}
          prompt={prompt}
          loading={loading}
          onRegenerate={regenerate}
        />

      </div>

    </main>
  );
}