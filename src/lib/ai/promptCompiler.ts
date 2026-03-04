import { STYLE_PRESETS } from "./styles";

export function compilePrompt(tweet: string, style: string = "auto") {
    const cleanedTweet = tweet.trim();

    const styleModifier =
        STYLE_PRESETS[style as keyof typeof STYLE_PRESETS] || "";

    const baseScene = `
Create a detailed visual scene representing this idea:

"${cleanedTweet}"

high detail, visually rich composition
`;

    return `${baseScene} ${styleModifier}`;
}