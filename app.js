import { fazerPergunta } from './pergunta.js'
import { perguntar } from './perguntaLivre.js'
import { consultar } from './consultaDestino.js'
import { processaImagem } from './processaImagem.js'
import { processaArquivoTexto } from './categorizador.js'

async function principal() {
  const escolha = await fazerPergunta(`Escolha uma das opções abaixo: \n
  1. Fazer uma pergunta livre sobre um destino;
  2. Comparação de destinos por categorias;
  3. Ver informação com base em imagem;
  4. Fazer a análise de sentimentos com base em arquivo texto;
  \nOpção desejada: `)

  if (escolha === '1') {
    await perguntar()
  } else if (escolha === '2') {
    await consultar()
  } else if (escolha === '3'){
    const imagem = await fazerPergunta('Me informe o path da imagem: ')
    await processaImagem(imagem)
  } else if (escolha === '4'){
    await processaArquivoTexto()
  } else {
    console.log('Escolha inválida.')
  }
}

principal()