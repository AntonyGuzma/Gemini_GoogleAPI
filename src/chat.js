import { chat } from "./inicializaChat.js"

export async function executaChat(msg) {
  // For text-only input, use the gemini-pro model
  const result = await chat.sendMessage(msg)
  const response = await result.response
  
  return response.text()
}
