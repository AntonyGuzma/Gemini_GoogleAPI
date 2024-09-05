import { inicializaModelo } from '../model/modelo.js'
import { readFileSync } from "fs"
import { fazerPergunta } from '../services/pergunta.js'

const model = await inicializaModelo("gemini-1.5-pro")

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
    return {
      inlineData: {
        data: Buffer.from(readFileSync(path)).toString("base64"),
        mimeType
      },
    }
  }

export async function processaImagem(imagem) {
    const prompt = await fazerPergunta('Pergunte sobre a imagem: ')

    const imageParts =[
        fileToGenerativePart(imagem, "image/jpg")
    ]

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response
    const text = response.text()
    console.log(text)
}