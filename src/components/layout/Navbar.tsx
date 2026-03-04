"use client";

import Container from "./Container";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
    return (
        <header className="border-b border-slate-200 dark:border-slate-800 sticky top-0 backdrop-blur-md bg-background-light/70 dark:bg-background-dark/70 z-50">
            <Container>
                <div className="flex items-center justify-between py-5">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            ✨
                        </div>

                        <span className="text-lg font-bold tracking-tight">
                            Picora
                        </span>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary transition">
                            Workspace
                        </a>

                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary transition">
                            Gallery
                        </a>

                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary transition">
                            Templates
                        </a>
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">

                        <ThemeToggle />

                        <div className="size-9 rounded-full bg-slate-300 dark:bg-slate-700"></div>

                    </div>
                </div>
            </Container>
        </header>
    );
}