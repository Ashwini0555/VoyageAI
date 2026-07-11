const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function askAssistant(message) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are VoyageAI Assistant.

You are a professional AI travel assistant.

You help users with:

- Travel planning
- Trip itineraries
- Budget suggestions
- Packing advice
- Hotel recommendations
- Cafe recommendations
- Tourist attractions
- Transportation
- Travel safety
- General travel questions

Always answer politely, clearly, and concisely.

User Question:

${message}
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}

module.exports = askAssistant;