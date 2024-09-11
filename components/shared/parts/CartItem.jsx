'use client'

import { cn } from "@/lib/utils"
import { Trash2 } from "lucide-react"
import { useProductStore } from "../hooks/useProductStore"

export default function CartItem({imageurl, name, price, className, description}) {
    return (
        <div className={cn('flex bg-white p-5 gap-6', className)}>
            <img className="w-[65px] h-[65px]" src={imageurl} alt="Logo" />
  
            <div>
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-sm text-gray-400">{description}</p>
                <hr className="my-3" />
  
                    <div className="flex items-center justify-between">
                        <h2 className="font-bold">{price} $</h2>

                        <Trash2 width={15} className="text-gray-500 cursor-pointer" onClick={() => useProductStore.getState().removeFromCart(name)} />
                    </div>
            </div>
        </div>
    )
}