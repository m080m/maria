// api/generate.js
export const config = {
    runtime: 'edge', // Using Edge Runtime for faster cold boots
};

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`;

export default async function handler(request) {
    if (request.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }

    try {
        const body = await request.json();
        const { prompt } = body;

        if (!GEMINI_API_KEY) {
            return new Response(JSON.stringify({ error: 'Server configuration error: Missing API Key' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Forward the request to Gemini
        const geminiResponse = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                tools: [{ googleSearch: {} }]
            })
        });

        const data = await geminiResponse.json();

        // Log Grounding Metadata to verify Search usage
        if (data.candidates && data.candidates[0]) {
            const metadata = data.candidates[0].groundingMetadata;
            console.log("🔍 Google Search Used:", metadata ? "YES" : "NO");
            if (metadata) {
                console.log("Grounding Metadata:", JSON.stringify(metadata, null, 2));
            }
        }

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
