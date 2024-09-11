'use client'

import { useProductStore } from "@/components/shared/hooks/useProductStore"
import { Button } from "@/components/ui/button"
import { ProductAdded } from "../blocks/Message"

export default function ProductButton({id, name, description, imageurl, price}) {
    return (
        <div>
            <Button className='font-bold px-7' onClick={() => {
                useProductStore.getState().addToCart({id, name, description, imageurl, price})
                ProductAdded(name)
            }}>Add to cart for ${price}</Button>
        </div>
    )
}