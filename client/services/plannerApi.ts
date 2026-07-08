import axios from "axios";

const API = "http://localhost:5000/api/planner";

export async function generateTrip(data: any) {
  const response = await axios.post(`${API}/generate`, data);

  return response.data;
}