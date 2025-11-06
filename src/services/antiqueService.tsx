import axios from "axios";
import { type Antique } from "./models/antique";

const BASE_URL : string = import.meta.env.VITE_ANTIQUE_API_BASE_URL;
console.log("BASE_URL:", BASE_URL);
const ANTIQUE_ENDPOINTS = 'antique/';

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const GetAntiquesByStatus = async (
    includeAvailable : boolean,
    includeSold : boolean,
    includeArchived : boolean
) : Promise<Antique[]> => {
    const response =  await apiClient.get(
        `${ANTIQUE_ENDPOINTS}?includeAvailable=${includeAvailable}&includeSold=${includeSold}&includeArchived=${includeArchived}`
    ).then((response) => response.data)
    console.log("Antiques response:", response)
    return response;
};

export { GetAntiquesByStatus }