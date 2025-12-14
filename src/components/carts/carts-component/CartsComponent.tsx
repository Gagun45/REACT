import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICart} from "../../../models/cart/CartModel.ts";
import {CartComponent} from "../cart-component/CartComponent.tsx";
import {apiService} from "../../../service/api.service.ts";

export const CartsComponent = () => {
    const [carts, setCarts] = useState<ICart[]>([]);
    const {id} = useParams()
    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                const allCarts = await apiService.getCartsByUserId(+id)
                setCarts(allCarts)
            }
        fetchData()
        }
    }, [id])
    return (
        <>
            <h2>Cart of user {id}</h2>
            {carts.map((cart) => (<CartComponent key={cart.id} cart={cart}/>))}
        </>
    );
};