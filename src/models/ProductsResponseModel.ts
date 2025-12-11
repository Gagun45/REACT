import type {IProduct} from "./ProductModel.ts";

export interface IProductsResponse {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}