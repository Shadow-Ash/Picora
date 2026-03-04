import { NextResponse } from "next/server";
import { compilePrompt } from "@/lib/ai/promptCompiler";
import { generateImage } from "@/lib/ai/geminiClient";

export async function POST(req: Request) {

    const { tweet, style } = await req.json();

    try {
        const prompt = compilePrompt(tweet, style);
        const image = await generateImage(prompt);

        return NextResponse.json({ prompt, image });

    } catch (error) {
        return NextResponse.json(
            { error: "Image generation failed" },
            { status: 500 }
        );
    }

}