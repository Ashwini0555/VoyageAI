import axios from "axios";

const API = "http://localhost:5000/api/trips";

export const getMyTrips = async (userId: string) => {
  const response = await axios.get(`${API}/my-trips/${userId}`);
  return response.data;
};

export const deleteTrip = async (id: string) => {
  const response = await axios.delete(`${API}/${id}`);
  return response.data;
};

export const getTripById = async (id: string) => {
  const response = await axios.get(`${API}/${id}`);
  return response.data;
};