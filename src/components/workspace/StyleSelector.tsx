"use client";

interface Props {
    style: string;
    setStyle: (style: string) => void;
}

const styles = [
    "auto",
    "cinematic",
    "cyberpunk",
    "anime",
    "realistic",
    "illustration"
];

export default function StyleSelector({ style, setStyle }: Props) {
    return (
        <div className="flex flex-wrap gap-2 justify-center">

            {styles.map((s) => (
                <button
                    key={s}
                    onClick={() => setStyle(s)}
                    className={`px-4 py-2 text-sm rounded-full border transition
          ${style === s
                            ? "bg-primary text-white border-primary"
                            : "bg-white dark:bg-card-dark border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                        }`}
                >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
            ))}

        </div>
    );
}