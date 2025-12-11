import type {FC} from "react";
import type {IProduct} from "../../models/ProductModel.ts";



type PropType = {
    product: IProduct;
};
export const Product:FC<PropType> = ({product: {id, title, description}}) => {
    return (
        <li className='border mb-2'>
            <h3 className={'font-bold'}>{id} - {title}</h3>
            <p className={'italic'}>{description}</p>
        </li>
    );
};