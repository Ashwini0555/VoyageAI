import axios from "axios";

const API = "http://localhost:5000/api/food-guide";

export async function generateFoodGuide(data: {
  destination: string;
  budget: number;
  cuisine: string;
}) {
  const response = await axios.post(
    `${API}/generate`,
    data
  );

  return response.data;
}