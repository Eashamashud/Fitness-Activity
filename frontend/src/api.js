// import axios from "axios";
//
// const API_BASE_URL = 'https://fitness-activity-production.up.railway.app/api';
//
// //Fetch all fitness data
// export const fetchFitnessData = async () => {
//     const response = await axios.get(`${API_BASE_URL}/getAllFitness`);
//     return response.data;
// };
//
// //Add a new fitness entry
// export const addFitnessEntry = async (fitnessData, userId) => {
//     const response = await axios.post(`${API_BASE_URL}/addFitness`, {
//         ...fitnessData,
//         userId: userId
//     });
//     return response.data;
// };
//
// // Delete fitness entry
// export const deleteFitnessEntry = async(id) => {
//     await axios.delete(`${API_BASE_URL}/deleteFitnessById/${id}`);
// };

import axios from "axios";

const API_BASE_URL = 'https://fitness-activity-production.up.railway.app/api';

// Fetch workouts for the logged-in user
export const fetchFitnessData = async () => {
    const userId = localStorage.getItem("userId"); // ✅ Get user ID from storage
    if (!userId) {
        console.error("User ID not found in localStorage!");
        return [];
    }

    try {
        const response = await axios.get(`${API_BASE_URL}/getUserFitness/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching fitness data:", error);
        return [];
    }
};

// Add a new fitness entry for the logged-in user
export const addFitnessEntry = async (fitnessData) => {
    const userId = localStorage.getItem("userId"); // ✅ Get user ID
    if (!userId) {
        console.error("User ID not found in localStorage!");
        return;
    }

    const entryWithUser = { ...fitnessData, userId };

    try {
        const response = await axios.post(`${API_BASE_URL}/addFitness`, entryWithUser);
        return response.data;
    } catch (error) {
        console.error("Error adding fitness entry:", error.response?.data || error.message);
    }
};

// Delete a fitness entry
export const deleteFitnessEntry = async (id) => {
    await axios.delete(`${API_BASE_URL}/deleteFitnessById/${id}`);
};
