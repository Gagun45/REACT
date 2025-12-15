import type {ICar} from "../models/car/ICar.ts";
import {axiosInstance} from "../axios/axios.ts";

export const CarsService = {
    getCars: async ():Promise<ICar[]> => {
        const res = await axiosInstance.get<ICar[]>('/cars')
        return res.data
    }
}