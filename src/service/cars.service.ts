import type {ICar} from "../models/car/ICar.ts";
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1',
    headers: {"Content-Type": "application/json"}

})

export const CarsService = {
    getCars: async ():Promise<ICar[]> => {
        const res = await axiosInstance.get<ICar[]>('/cars')
        return res.data
    },
    addNewCar: async (car: ICar):Promise<ICar> => {
        const res = await axiosInstance.post<ICar>('/cars', car)
        return res.data
    }
}