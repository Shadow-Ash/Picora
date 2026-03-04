interface Props {
    count: number;
    max: number;
}

export default function CharacterCounter({ count, max }: Props) {
    return (
        <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
            {count} / {max}
        </span>
    );
}