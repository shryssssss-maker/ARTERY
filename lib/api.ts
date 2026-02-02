export const callGemini = async (prompt: string, systemInstruction: string = "") => {
    const apiKey = ""; // Injected by runtime
    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    systemInstruction: { parts: [{ text: systemInstruction }] },
                }),
            }
        );
        const data = await response.json();
        if (data.error) throw new Error(data.error.message);
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "The muse is silent...";
    } catch (error) {
        console.error("Gemini Error:", error);
        return "The connection to the muse is currently fragile. Please try again.";
    }
};

export const callImagen = async (prompt: string) => {
    const apiKey = ""; // Injected by runtime
    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    instances: [{ prompt: prompt }],
                    parameters: { sampleCount: 1 }
                }),
            }
        );
        const data = await response.json();
        if (data.error) throw new Error(data.error.message);
        if (data.predictions && data.predictions[0]?.bytesBase64Encoded) {
            return `data:image/png;base64,${data.predictions[0].bytesBase64Encoded}`;
        }
        throw new Error("No image generated");
    } catch (error) {
        console.error("Imagen Error:", error);
        throw error;
    }
};
