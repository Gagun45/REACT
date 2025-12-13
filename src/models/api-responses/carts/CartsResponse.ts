import type {IBasicResponse} from "../BasicResponseModel.ts";
import type {ICart} from "../../cart/CartModel.ts";

export interface ICartsResponse extends IBasicResponse {
    carts: ICart[];
}