import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICart} from "../../../models/cart/CartModel.ts";
import {CartComponent} from "../cart-component/CartComponent.tsx";
import {apiService} from "../../../service/api.service.ts";

export const CartsComponent = () => {
    const [carts, setCarts] = useState<ICart[]>([]);
    const {state} = useLocation()
    useEffect(() => {
        const fetchData = async () => {
            const allCarts = await apiService.getCartsByUserId(state)
            setCarts(allCarts)
        }
        fetchData()
    },[state])
    return (
        <>
            <h2>Cart of user {state}</h2>
            {carts.map((cart) => (<CartComponent key={cart.id} cart={cart}/>))}
        </>
    );
};