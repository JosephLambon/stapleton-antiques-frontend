import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL : string = import.meta.env.ANTIQUE_API_BASE_URL;
const ANTIQUE_ENDPOINTS = 'antiques/';

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const GetAntiquesByStatus = async (
    includeAvailable : boolean,
    includeSold : boolean,
    includeArchived : boolean
) => {
    const response = await client.get(
        `${ANTIQUE_ENDPOINTS}?includeAvailable=${includeAvailable}&includeSold=${includeSold}&includeArchived=${includeArchived}`
    );
};

export { GetAntiquesByStatus }