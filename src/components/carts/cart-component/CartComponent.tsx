import type {FC} from "react";
import type {ICart} from "../../../models/cart/CartModel.ts";

type Props = { cart: ICart };
export const CartComponent:FC<Props> = ({cart}) => {
    return (
        <li>
            {cart.id} - {cart.userId} - {cart.total}
        </li>
    );
};