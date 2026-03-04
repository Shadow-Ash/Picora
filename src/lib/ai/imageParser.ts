export function parseGeminiImage(response: any) {
    try {
        const candidates = response?.candidates;

        if (!candidates || candidates.length === 0) {
            console.error("No candidates in Gemini response", response);
            return null;
        }

        const parts = candidates[0]?.content?.parts;

        if (!parts || !Array.isArray(parts)) {
            console.error("No parts found in Gemini response", response);
            return null;
        }

        const imagePart = parts.find((p: any) => p.inlineData);

        if (!imagePart) {
            console.error("No image part found", parts);
            return null;
        }

        const base64 = imagePart.inlineData.data;
        const mime = imagePart.inlineData.mimeType;

        return `data:${mime};base64,${base64}`;
    } catch (error) {
        console.error("Image parsing failed", error);
        return null;
    }
}