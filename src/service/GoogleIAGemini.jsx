/* eslint-disable no-undef */
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyA8I98-PNTWHmWXaZvHtAbSSMwqxIGldo8");

export default async function IaFetch(code) {
  try {
    if (code) {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `${code} de forma calma e pausada  Você poderia resumir a funcionalidade principal do codigo acima e criar um readme padrão desse projeto para o github no formato e código md?`;

      console.log("code", prompt);

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);

      return { text };
    }
  } catch (error) {
    console.error("Erro ao gerar conteúdo:", error);
  }
}
