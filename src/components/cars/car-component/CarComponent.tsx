import type {FC} from "react";
import type {ICar} from "../../../models/car/ICar.ts";

type Props = { car: ICar };
export const CarComponent:FC<Props> = ({car}) => {
    return (
        <li>
            {car.id} - {car.brand} - {car.price}
        </li>
    );
};