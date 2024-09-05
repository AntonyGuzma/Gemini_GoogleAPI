import { inicializaModelo } from './modelo.js';
import { fazerPergunta } from './pergunta.js';


const model = await inicializaModelo("gemini-1.5-pro-latest")
export async function perguntar() {

    const prompt = await fazerPergunta("Me pergute sobre o destino que deseja conhecer: ")

    const parts = [
        {text: "Você é o chatbot de um site que vende pacotes de viagem."},
        {text: `input: me fale o maximo que você puder sobre o destino ${prompt}`},
        {text: "output: "},
      ];

    const result = await model.generateContent(
        { contents: [{ role: "user", parts }] }
    )
    const response = await result.response
    console.log(response.text())
}

