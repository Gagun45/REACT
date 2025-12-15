import type {INewCar} from "../models/car/INewCar.ts";
import {axiosInstance} from "../axios/axios.ts";
import type {ICar} from "../models/car/ICar.ts";

export const CarsService = {
    getCars: async ():Promise<ICar[]> => {
        const res = await axiosInstance.get<ICar[]>('/cars')
        return res.data
    },
    addNewCar: async (car: INewCar):Promise<ICar> => {
        const res = await axiosInstance.post<ICar>('/cars', car)
        return res.data
    }
}