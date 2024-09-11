'use client'

import Container from "../parts/Container";
import Image from "next/image";
import SearchInput from "../parts/SearchInput";
import AccountBtn from "../parts/AccountBtn";
import Link from "next/link";
import ShopCard from "../parts/ShopCart";
import { SessionProvider } from "next-auth/react";


export default function Header({hidden = false}) {
    return (
        <SessionProvider>

        <header>
            <Container className="flex items-center justify-between py-8">

                <Link href='/'>
                    <div className="flex items-center gap-4">
                        <Image width={35} height='35' src='/logo.png' alt='logo' />
                        <div>
                            <h1 className="text-2xl uppercase font-black">Pizzayo</h1>
                            <p className="text-sm text-gray-400 leading-3">the best pizza shop</p>
                        </div>
                    </div>
                </Link>

                <div className={`mx-10 flex-1 ${hidden ? 'hidden' : ''}`}>
                    <SearchInput />
                </div>

                <div className={`flex items-center gap-3 ${hidden ? 'hidden' : ''}`}>
                    <AccountBtn />
                    <ShopCard />
                </div>

            </Container>
        </header>

        </SessionProvider>
    )
}