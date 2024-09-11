'use client'

import { useProductStore } from "../hooks/useProductStore"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { ProductAdded } from "../blocks/Message"

export default function ItemButton({itemData}) {
    const {id, name, description, imageurl, price} = itemData

    return (
        <div>
            <Button className='bg-[#FFFAF4] text-[#FE5F00] font-bold hover:text-[white]' onClick={() => {
                useProductStore.getState().addToCart({id, name, description, imageurl, price})
                ProductAdded(name)
            }}>
                <Plus width={20} className="mr-1" />
                <span className="mr-2">Add to cart</span>
            </Button>
        </div>
    )
}