"use client";

interface Props {
    image?: string;
    prompt?: string;
    onRegenerate?: () => void;
}

export default function ActionBar({ image, prompt, onRegenerate }: Props) {

    const downloadImage = () => {
        if (!image) return;

        const link = document.createElement("a");
        link.href = image;
        link.download = "picora-image.png";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const copyPrompt = async () => {
        if (!prompt) return;

        await navigator.clipboard.writeText(prompt);
    };

    return (
        <div className="flex items-center justify-center gap-6 py-2">

            {/* DOWNLOAD */}

            <button
                onClick={downloadImage}
                className="flex flex-col items-center gap-1 group"
            >
                <div className="p-3 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 rounded-full text-slate-600 dark:text-slate-400 group-hover:text-primary group-hover:border-primary/50 transition-all shadow-sm">
                    ⬇
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Download
                </span>
            </button>

            {/* REGENERATE */}

            <button
                onClick={onRegenerate}
                className="flex flex-col items-center gap-1 group"
            >
                <div className="p-3 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 rounded-full text-slate-600 dark:text-slate-400 group-hover:text-primary group-hover:border-primary/50 transition-all shadow-sm">
                    🔄
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Regenerate
                </span>
            </button>

            {/* COPY PROMPT */}

            <button
                onClick={copyPrompt}
                className="flex flex-col items-center gap-1 group"
            >
                <div className="p-3 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 rounded-full text-slate-600 dark:text-slate-400 group-hover:text-primary group-hover:border-primary/50 transition-all shadow-sm">
                    📋
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Copy Prompt
                </span>
            </button>

        </div>
    );
}