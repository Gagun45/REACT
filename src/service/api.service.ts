import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
})

export const getAllItems = async <T>(endpoint: string): Promise<T> => {
    const response = await axiosInstance.get(endpoint);
    return response.data as T;
}