const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function rankCafes(data) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are an AI travel assistant.

Below is a list of REAL cafes.

${JSON.stringify(data.cafes)}

User Budget:
₹${data.budget}

Cuisine:
${data.cuisine}

Recommend the best 5 cafes.

Return ONLY JSON.

Example:

[
{
"name":"Cafe Chocolatti",
"description":"Perfect for Italian lovers.",
"reason":"Fits budget and has excellent reviews."
}
]
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}

module.exports = rankCafes;