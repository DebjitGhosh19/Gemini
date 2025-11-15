import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyAu9VBwG1Sd890Z2uKtz2x9OZalQlVldxI" });
  
async function main(prompt) {


  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
  return response.text

}

export default main;