'use client'

import ProductCarts from "@/components/shared/blocks/ProductCarts";
import { useProductStore } from "../hooks/useProductStore";
import { Api } from "@/components/services/api-client";

Promise.all([
    Api.products.all(),
]).then((products) => {
    products = products.flat()
    
    useProductStore.getState().setProductsFixed(products)
    useProductStore.getState().setProducts(products)
})

export default function Products() {
    return (
        <div id="products">
            <div>
                <ProductCarts text='Pizzas' items={useProductStore(state => state.products)} />
            </div>

            <div>
                <ProductCarts text="Combos" items={useProductStore(state => state.products)} />
            </div>

            <div>
                <ProductCarts text="Desserts" items={useProductStore(state => state.products)} />
            </div>

            <div>
                <ProductCarts text="Drinks" items={useProductStore(state => state.products)} />
            </div>
        </div>
    )
}