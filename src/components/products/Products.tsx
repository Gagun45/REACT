import {useEffect, useState} from "react";
import type {IProduct} from "../../models/ProductModel.ts";
import {getProducts} from "../../service/api.service.ts";
import {Product} from "../product/Product.tsx";

export const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(()=>{
        const fetchData = async () => {
            const allProducts = await getProducts()
            setProducts(allProducts)
        }
        fetchData()
    },[])
    return (
        <ul className='bg-slate-400 p-4'>
            {products.map((product) => <Product key={product.id} product={product} />)}
        </ul>
    );
};