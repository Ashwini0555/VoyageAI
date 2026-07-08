console.log(process.env.GEMINI_API_KEY);
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateTrip(data) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are an expert travel planner.

Create a detailed travel itinerary.

Destination: ${data.destination}
Budget: ${data.budget}
Days: ${data.days}
Travel Style: ${data.travelStyle}
Travelers: ${data.travelers}
Start Date: ${data.startDate}
Interests: ${data.interests.join(", ")}

Return the itinerary in Markdown format.

Include:

Day-wise itinerary

Budget estimation

Food recommendations

Hidden gems

Packing tips
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}

module.exports = generateTrip;