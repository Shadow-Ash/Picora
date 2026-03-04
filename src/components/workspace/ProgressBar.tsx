interface Props {
    value: number;
}

export default function ProgressBar({ value }: Props) {
    return (
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
                className="bg-primary h-full transition-all duration-300"
                style={{ width: `${value}%` }}
            />
        </div>
    );
}