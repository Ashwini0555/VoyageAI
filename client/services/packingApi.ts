import axios from "axios";

const API = "http://localhost:5000/api/packing";

export async function generatePacking(trip: string) {
  const response = await axios.post(`${API}/generate`, {
    trip,
  });

  return response.data;
}

export async function getPacking(tripId: string) {
  const response = await axios.get(`${API}/${tripId}`);

  return response.data;
}

export async function savePacking(
  tripId: string,
  items: any[]
) {
  const response = await axios.put(
    `${API}/${tripId}`,
    {
      items,
    }
  );

  return response.data;
}