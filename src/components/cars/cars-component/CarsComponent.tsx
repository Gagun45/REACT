import {useEffect, useState} from "react";
import {CarComponent} from "../car-component/CarComponent.tsx";
import {CarsService} from "../../../service/cars.service.ts";
import type {ICar} from "../../../models/car/ICar.ts";

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        const fetchData = async ():Promise<void> => {
            const allCars = await CarsService.getCars()
            console.log(allCars);
            setCars(allCars)
        }
        fetchData()
    },[])
    return (
        <>
            <h3>Cars component</h3>
            {cars.map((car) => (<CarComponent key={car.id} car={car}/>))}
        </>
    );
};