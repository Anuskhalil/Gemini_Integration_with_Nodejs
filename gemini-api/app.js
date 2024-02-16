import { GoogleGenerativeAI } from '@google/generative-ai'
import dotenv from 'dotenv'

dotenv.config()

// Configuration
const genAI = new GoogleGenerativeAI(process.env.Api_Key)
// const generationConfig = { temperature: 0.9, TopP: 1, topK: 1, maxOutputTokens: 4096 };


// generate Content
async function generateContent() {
    // Initialize
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })
    try {
        const prompt = "Design a Workout Routine for the Week";
        const result = await model.generateContent(prompt)
        const response = await result.response;
        const text = response.text();
        console.log(text);
    } catch (error) {
        console.error("Error getting content", error)
    }
}
generateContent()

