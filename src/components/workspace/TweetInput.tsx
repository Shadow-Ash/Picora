"use client";

import { useState } from "react";
import CharacterCounter from "./CharacterCounter";
import ProgressBar from "./ProgressBar";
import GenerateButton from "./GenerateButton";
import StyleSelector from "./StyleSelector";

const MAX_CHARS = 280;

interface Props {
    setImage: (image: string) => void;
    setPrompt: (prompt: string) => void;
    setLoading: (loading: boolean) => void;
    setTweet: (tweet: string) => void;
}

export default function TweetInput({
    setImage,
    setPrompt,
    setLoading,
    setTweet
}: Props) {

    const [tweet, setLocalTweet] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [style, setStyle] = useState("auto");

    const count = tweet.length;
    const progress = (count / MAX_CHARS) * 100;

    const handleGenerate = async () => {

        if (!tweet.trim()) return;

        try {

            setLoading(true);
            setError(null);

            const res = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    tweet,
                    style
                })
            });

            const data = await res.json();

            if (data.error) {

                setError(data.error);

            } else {

                setImage(data.image);
                setPrompt(data.prompt);

                // store tweet for regenerate feature
                setTweet(tweet);

            }

        } catch (err) {

            setError("Something went wrong. Please try again.");

        } finally {

            setLoading(false);

        }

    };

    return (
        <div className="bg-white dark:bg-card-dark rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-200 dark:border-slate-800/50">

            <div className="flex flex-col gap-6">

                {/* TEXTAREA */}

                <div className="relative">

                    <textarea
                        value={tweet}
                        onChange={(e) => {
                            if (e.target.value.length <= MAX_CHARS) {
                                setLocalTweet(e.target.value);
                            }
                        }}
                        placeholder="Paste or write the tweet you want to visualize..."
                        className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 text-lg text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none min-h-[160px] resize-none transition-all"
                    />

                    <div className="absolute bottom-4 right-4">
                        <CharacterCounter count={count} max={MAX_CHARS} />
                    </div>

                </div>

                {/* PROGRESS BAR */}

                <ProgressBar value={progress} />

                {/* STYLE SELECTOR */}

                <StyleSelector
                    style={style}
                    setStyle={setStyle}
                />

                {/* GENERATE BUTTON */}

                <GenerateButton
                    loading={false}
                    disabled={!tweet.trim()}
                    onClick={handleGenerate}
                />

                {/* ERROR MESSAGE */}

                {error && (
                    <p className="text-red-500 text-sm text-center">
                        {error}
                    </p>
                )}

            </div>

        </div>
    );
}