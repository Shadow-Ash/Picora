import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Picora — Visualize Your Voice",
  description: "Turn tweets into cinematic visuals using AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className="min-h-screen flex flex-col">

        <ThemeProvider>

          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

        </ThemeProvider>

      </body>

    </html>
  );
}