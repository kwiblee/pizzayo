'use client'

import { useProductStore } from "../hooks/useProductStore"
import { Trash2, X } from 'lucide-react'
import Image from "next/image"

export default function Cart() {
    const cart = useProductStore((state) => state.cart)

    return (
        <div className="flex-1 mr-9 rounded-3xl bg-white">
            <div className="h-[79px] flex items-center justify-between px-9">
                <span className="font-extrabold text-[20px]">1. Cart</span>
                <div className="flex h-full gap-1 items-center">
                    <Trash2  width={15} className="text-[#8f8f8f] cursor-pointer "/>
                    <span className="text-[#8f8f8f] text-[15px] font-medium cursor-pointer" onClick={() => useProductStore.getState().clearCart()} >Clear the cart</span>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col ">
                {cart.map((item, index) => (
                    <div className="w-full flex justify-center border-t-[1px]" key={index}>
                        <div className="w-[90%] my-7 flex items-center justify-between gap-5">
                            <div className="flex items-center">
                                <Image src={item.imageurl} width={0} height={0} sizes="100vw" alt={item.name} className="w-[80px] h-[80px]"></Image>
                                <div className="flex flex-col ml-3 justify-center max-w-[300px]">
                                    <span className="font-extrabold text-[20px]">{item.name}</span>
                                    <span className="text-[#8f8f8f] text-[15px] font-medium">{item.description}</span>
                                </div>
                            </div>
                            <div className="flex gap-[50px]">
                                <span className="font-extrabold text-[16px]">{item.price} $</span>

                                <div>
                                    <X className="text-[#c0c0c0] hover:text-[#505050] cursor-pointer" onClick={() => useProductStore.getState().removeFromCart(item.name)} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
