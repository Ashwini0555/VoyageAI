import axios from "axios";

const API = "http://localhost:5000/api/assistant";

export async function askAssistant(message: string) {
  const response = await axios.post(`${API}/chat`, {
    message,
  });

  return response.data;
}