import Container from "./Container";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 mt-20 py-8">
            <Container>

                <div className="flex flex-col items-center gap-4 text-sm text-slate-500">

                    <div className="flex gap-6">
                        <a className="hover:text-primary transition">Privacy</a>
                        <a className="hover:text-primary transition">Terms</a>
                        <a className="hover:text-primary transition">Help</a>
                    </div>

                    <p className="text-xs">
                        © {new Date().getFullYear()} Picora AI. All rights reserved.
                    </p>

                </div>

            </Container>
        </footer>
    );
}