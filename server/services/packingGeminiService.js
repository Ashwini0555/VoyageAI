const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generatePackingList(trip) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are an AI travel packing assistant.

Generate a personalized packing checklist.

Trip Details:
Destination: ${trip.destination}
Duration: ${trip.days} days
Travel Style: ${trip.travelStyle}
Interests: ${trip.interests.join(", ")}

Rules:
- Return ONLY a JSON array.
- No markdown.
- No explanations.
- No category headings.
- No numbering.
- Each item should be a short string.

Example:

[
  "Passport",
  "Phone Charger",
  "Power Bank",
  "Comfortable Walking Shoes",
  "Sunglasses"
]
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}

module.exports = generatePackingList;