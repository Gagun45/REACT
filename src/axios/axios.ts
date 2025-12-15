import axios from 'axios'

const baseUrl = 'http://owu.linkpc.net/carsAPI/v1'

export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {"Content-Type": "application/json"}
})