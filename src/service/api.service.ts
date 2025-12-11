import type {IProduct} from "../models/ProductModel.ts";
import type {IProductsResponse} from "../models/ProductsResponseModel.ts";

const baseUrl = 'https://dummyjson.com'

const productsEndpoint = `${baseUrl}/products`;

export const getProducts = async ():Promise<IProduct[]> => {
    const response = await fetch(productsEndpoint)
    const data: IProductsResponse = await response.json()
    return data.products
}