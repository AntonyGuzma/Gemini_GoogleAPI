// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv'
dotenv.config()

export async function inicializaModelo(modelo) {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY)

    const model = genAI.getGenerativeModel({ model: modelo })

    return model
}