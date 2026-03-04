interface Props {
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
}

export default function GenerateButton({
    disabled,
    loading,
    onClick,
}: Props) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="w-full h-14 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
            style={{
                background:
                    "linear-gradient(135deg, #3713ec 0%, #8b5cf6 100%)",
                boxShadow: "0 0 20px rgba(55, 19, 236, 0.3)",
            }}
        >
            {loading ? "Generating..." : "Generate Image"}
        </button>
    );
}