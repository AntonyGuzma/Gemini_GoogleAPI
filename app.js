
import dotenv from 'dotenv';
dotenv.config();
// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";
import { fazerPergunta } from './pergunta.js';


const genAI = new GoogleGenerativeAI(process.env.API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

let prompt = "Você é um site de viagens e deve responder somente sobre esse assunto." + "Caso a pessoa usuária pergunte sobre algo diferente, diga que não pode responder." + "A pessoa usuária escolheu: "

prompt += await fazerPergunta("Me fale sobre o destino que deseja conhecer? ")

const result = await model.generateContent(prompt)
const response = await result.response
console.log(response.text())