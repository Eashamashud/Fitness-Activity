import axios from "axios";

const API_BASE_URL = 'https://fitness-activity-production.up.railway.app/api';

//Fetch all fitness data
export const fetchFitnessData = async () => {
    const response = await axios.get(`${API_BASE_URL}/getAllFitness`);
    return response.data;
};

//Add a new fitness entry
export const addFitnessEntry = async (fitnessData) => {
    const response = await axios.post(`${API_BASE_URL}/addFitness`, fitnessData);
    return response.data;
};

// Delete fitness entry
export const deleteFitnessEntry = async(id) => {
    await axios.delete(`${API_BASE_URL}/deleteFitnessById/${id}`);
}