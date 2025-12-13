import {urls} from "../constants/urls.ts";
import type {IUser} from "../models/user/UserModel.ts";
import type {IUsersResponse} from "../models/api-responses/users/UsersResponse.ts";
import type {ICart} from "../models/cart/CartModel.ts";
import type {ICartsResponse} from "../models/api-responses/carts/CartsResponse.ts";

export const apiService = {
    getUsers: async (): Promise<IUser[]> => {
        const res = await fetch(urls.users)
        const data:IUsersResponse = await res.json()
        return data.users
    },
    getCartsByUserId: async (userId: number): Promise<ICart[]> => {
        const res = await fetch(urls.userCarts(userId))
        const data:ICartsResponse = await res.json()
        return data.carts
    }
}