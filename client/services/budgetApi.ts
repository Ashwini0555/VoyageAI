import axios from "axios";

const API = "http://localhost:5000/api/budget";

export async function createBudget(data: any) {
  const response = await axios.post(API, data);
  return response.data;
}

export async function getBudget(tripId: string) {
  const response = await axios.get(`${API}/${tripId}`);
  return response.data;
}