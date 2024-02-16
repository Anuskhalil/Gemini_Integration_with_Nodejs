import { GoogleGenerativeAI } from '@google/generative-ai'
import { promises as fs } from 'fs'
import dotenv from 'dotenv'

dotenv.config()

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);


async function generateContent() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" })

    const imagePath = 'image.jpeg';
    const imageData = await fs.readFile(imagePath)
    const imageBase64 = imageData.toString('base64');

    const prompt = "Describe What these birds are doing?"

    const parts = [
        {
            inlineData: {
                mimeType: 'image/jpeg',
                data: imageBase64
            }
        }
    ]

    const result = await model.generateContent([prompt, ...parts]);
    const response = await result.response;
    const text = response.text();
    console.log("Here is the response of the image => ", text);
}
generateContent()