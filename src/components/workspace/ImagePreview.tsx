interface Props {
    image?: string;
    loading?: boolean;
}

export default function ImagePreview({ image, loading }: Props) {
    return (
        <div className="w-full aspect-video bg-slate-100 dark:bg-card-dark rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 relative">

            {/* Loading State */}

            {loading && (
                <div className="flex items-center justify-center h-full text-slate-400 animate-pulse">
                    Generating image...
                </div>
            )}

            {/* Generated Image */}

            {!loading && image && (
                <img
                    src={image}
                    alt="Generated image"
                    className="w-full h-full object-cover"
                />
            )}

            {/* Empty State */}

            {!loading && !image && (
                <div className="flex flex-col items-center justify-center h-full text-center px-6 text-slate-400">

                    <div className="text-3xl mb-2">✨</div>

                    <p className="text-sm">
                        Paste a tweet above and generate a visual.
                    </p>

                </div>
            )}

        </div>
    );
}