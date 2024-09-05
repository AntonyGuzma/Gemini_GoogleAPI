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

    const requisicao = (
        { contents: [{ role: "user", parts }] }
    )

    const result = await model.generateContent(requisicao)

    // Count tokens in a prompt without calling text generation
    const totalTOkenEntrada = await model.countTokens(requisicao)
    console.log("Token Entrada: " + totalTOkenEntrada.totalTokens)

    const response = await result.response
    const text = response.text()
    console.log(text)

    const totalTOkenSaida = await model.countTokens(text)
    console.log("Token Entrada: " + totalTOkenSaida.totalTokens)
}

