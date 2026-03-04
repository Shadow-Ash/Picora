import ResultHeader from "./ResultHeader";
import ImagePreview from "./ImagePreview";
import ActionBar from "./ActionBar";

interface Props {
    image?: string;
    prompt?: string;
    loading?: boolean;
    onRegenerate?: () => void;
}

export default function ResultSection({
    image,
    prompt,
    loading,
    onRegenerate
}: Props) {
    return (
        <div className="flex flex-col gap-6 w-full items-center">

            <ResultHeader />

            <ImagePreview image={image} loading={loading} />

            {/* Prompt Display */}

            {prompt && (
                <div className="w-full text-xs text-slate-500 bg-slate-100 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                    <span className="font-semibold text-slate-600 dark:text-slate-300">
                        Generated Prompt:
                    </span>

                    <p className="mt-1 break-words">
                        {prompt}
                    </p>
                </div>
            )}

            <ActionBar
                image={image}
                prompt={prompt}
                onRegenerate={onRegenerate}
            />

        </div>
    );
}