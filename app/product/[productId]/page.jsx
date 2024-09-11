import Header from "@/components/shared/blocks/Header"
import Container from "@/components/shared/parts/Container"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Api } from "@/components/services/api-client";
import ProductButton from "@/components/shared/parts/productButton"

import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"

export async function generateMetadata({params}) {
    const {name, type, description, ingridients} = await Api.products.product(params.productId);
    return {
        title: `Pizzayo - ${name}`,
        description: description,
        keywords: [name, type, ingridients],
    };
}

export default async function Page({params}) {
    const {id, name, type, description, imageurl, price} = await Api.products.product(params.productId);

    return (
        <main className="overflow-hidden">
            <Header />

            <Container>
                <div className="w-full h-[30px] flex items-center gap-2">
                    <Link href='/'><span className="text-[13px] font-light">Home</span></Link>
                    <span className="text-[13px] text-[#e0e0e0]">/</span>
                    <span className="text-[13px] font-light">{type[0].toUpperCase() + type.slice(1)}</span>
                    <span className="text-[13px] text-[#e0e0e0]">/</span>
                    <Link href={`/product/${params.productId}`}><span className="text-[13px] font-medium text-[#878787]">{name}</span></Link>
                </div>
            </Container>

            <Container className={'flex mt-6'}>
                <div className=" h-[470px] flex absolute">
                    <div className="w-[470px] h-full bg-[#FFF7EE] rounded-lg flex items-center justify-center">
                        <Suspense fallback={<Skeleton className="w-[80%] h-[80%] rounded-full bg-[#f5f5f5]" />}>
                            <Image src={imageurl} width={0} height={0} sizes="100vw" className="w-[80%] h-[80%] hover:translate-y-[2px]" alt={name}/>
                        </Suspense>
                    </div>
                    <div className="ml-10">
                        <div>
                            <span className="text-[30px] font-bold">{name}</span>
                        </div>
                        <div className="w-[60%]">
                            <span className="text-[15px] font-light text-[#878787]">{description}</span>
                        </div>
                        <div>
                            <Tabs defaultValue="medium" className="bg-white">
                                <TabsList className='bg-white mt-7'>
                                    <div className="w-[400px] h-[40px] grid grid-cols-3 rounded-[30px] bg-[#f5f5f4]">
                                        <TabsTrigger value="small" className="rounded-[30px]">Small</TabsTrigger>
                                        <TabsTrigger value="medium" className="rounded-[30px]">Medium</TabsTrigger>
                                        <TabsTrigger value="big" className="rounded-[30px]">Big</TabsTrigger>
                                    </div>
                                </TabsList>
                            </Tabs>

                            <Tabs defaultValue="traditional" className={`bg-white ${type === 'pizzas' ? '' : "hidden"}`}>
                                <TabsList className='bg-white mt-3'>
                                    <div className="w-[400px] h-[40px] grid grid-cols-2 rounded-[30px] bg-[#f5f5f4]">
                                        <TabsTrigger value="traditional" className="rounded-[30px]">Traditional</TabsTrigger>
                                        <TabsTrigger value="thin" className="rounded-[30px]">Thin</TabsTrigger>
                                    </div>
                                </TabsList>
                            </Tabs>

                        </div>

                        <div className="absolute bottom-0">
                            <ProductButton id={id} name={name} description={description} imageurl={imageurl} price={price} />
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}