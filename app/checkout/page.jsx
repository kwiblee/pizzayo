'use client'

import Header from "@/components/shared/blocks/Header";
import Container from "@/components/shared/parts/Container";
import Checkout from "@/components/shared/blocks/Checkout";
import Cart from "@/components/shared/blocks/Cart";
import UserInfoBlock from "@/components/shared/blocks/UserInfoBlock";
import InfoBlock from "@/components/shared/blocks/InfoCart";

export default function Page() {
    return (
        <main className="bg-[#f4f1ee]">
            <Header hidden={true} />

            <Container>
                <div className="w-full h-[1px] bg-[#DEDEDE]" />
            </Container>

            <Container className='mt-7'>
                <span className="font-extrabold text-[30px]">Placing an order</span>
            </Container>

            <Container className='flex justify-between mt-7'>
                <div className="flex-1">
                    <Cart />
                    <UserInfoBlock />
                    <InfoBlock />
                </div>
                <div>
                    <Checkout />
                </div>
            </Container>
        </main>
    )
}