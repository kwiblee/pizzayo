'use client'

import { Package, Percent, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useProductStore } from "../hooks/useProductStore"

export default function Checkout() {
    const cart = useProductStore((state) => state.cart)

    if (typeof window !== 'undefined') {
        if (cart.length === 0) {
            window.location = '/'
        }
    }

    return (
        <div className="w-[400px] h-[400px] bg-white rounded-3xl flex flex-col">
            <div className="w-full h-1/3  flex items-center justify-center">
                <div className="flex flex-col w-[80%]">
                    <span className="font-medium text-[20px]">Total: </span>
                    <span className="font-extrabold text-[28px]">{( ((cart.reduce((acc, value) => acc + value.price, 0).toFixed(2)) / 10) + (cart.reduce((acc, value) => acc + value.price, 0) + 1.4)).toFixed(2) } $</span>
                </div>
            </div>
            <div className="w-full h-1/3 flex items-center justify-center border-t-[1px] border-b-[1px]">
                <div className="w-[80%] h-[80%]">

                    <div className="w-full h-1/3 flex items-center">
                        <Package width={15} className='text-[#B9B9B9]' />
                        <span className='ml-2 font-medium'>Price of goods:</span>
                        <div className='flex-1 h-[30%] mx-3 border-dashed border-0 border-b-[1px]'></div>
                        <span className='font-extrabold'>{cart.reduce((acc, value) => acc + value.price, 0).toFixed(2)} $</span>
                    </div>

                    <div className="w-full h-1/3 flex items-center">
                        <Percent width={15} className='text-[#B9B9B9]' />
                        <span className='ml-2 font-medium'>Taxes:</span>
                        <div className='flex-1 h-[30%] mx-3 border-dashed border-0 border-b-[1px] border-[]'></div>
                        <span className='font-extrabold'>{((cart.reduce((acc, value) => acc + value.price, 0).toFixed(2)) / 10).toFixed(2)} $</span>
                    </div>

                    <div className="w-full h-1/3 flex items-center">
                        <Truck width={15} className='text-[#B9B9B9]' />
                        <span className='ml-2 font-medium'>Delivery:</span>
                        <div className='flex-1 h-[30%] mx-3 border-dashed border-0 border-b-[1px] border-[]'></div>
                        <span className='font-extrabold'>1.4 $</span>
                    </div>

                </div>
            </div>
            <div className="w-full h-1/3 flex items-center justify-center">
                <Button className='w-[80%] h-[50px] rounded-2xl text-[17px] font-semibold'>Go to payment</Button>
            </div>
        </div>
    )
}