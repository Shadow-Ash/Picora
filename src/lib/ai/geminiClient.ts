import { tryModels } from "./quotaHandler";
import { parseGeminiImage } from "./imageParser";

export async function generateImage(prompt: string) {

    const response = await tryModels(prompt);

    const image = parseGeminiImage(response);

    return image;
}