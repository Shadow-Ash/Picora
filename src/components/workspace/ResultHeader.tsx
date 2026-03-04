export default function ResultHeader() {
    return (
        <div className="flex items-center justify-between w-full px-2">

            <h3 className="text-slate-900 dark:text-slate-200 font-semibold text-lg flex items-center gap-2">
                ✨ Generated Result
            </h3>

            <div className="flex gap-2">

                <button className="p-2 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-all">
                    Share
                </button>

                <button className="p-2 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-all">
                    Settings
                </button>

            </div>
        </div>
    );
}