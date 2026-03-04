import { getImageModels } from "./modelRouter";

export async function tryModels(prompt: string) {

    const models = getImageModels();

    for (const model of models) {

        try {

            const res = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [{ text: prompt }]
                            }
                        ]
                    })
                }
            );

            const data = await res.json();

            if (!data.error) {
                return data;
            }

            if (data.error.code !== 429) {
                throw new Error(data.error.message);
            }

        } catch (err) {
            console.error(`Model failed: ${model}`);
        }

    }

    throw new Error("All image models exhausted");
}