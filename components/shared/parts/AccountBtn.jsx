'use client'

import { Button } from "@/components/ui/button";
import { User, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from "@/components/shared/blocks/Login"
import Register from "@/components/shared/blocks/Register"
import { useState } from "react"
import { signOut, useSession } from "next-auth/react";

export default function AccountBtn() {
    const [Modal, setModal] = useState(false)
    const [Bar, setBar] = useState(false)
    const session = useSession()

    let timer;

    const onLeave = () => {
        timer = setTimeout(() => {
            setBar(false)
        }, 300);
    }

    const onEnter = () => {
        clearTimeout(timer)
    }
    
    return (
        <div>
            <Button variant='outline' className='flex items-center gap-1' onClick={session.status === 'authenticated' ? () => {setModal(false)} : () => {setModal(true)}} onMouseEnter={() => setBar(true)} onMouseLeave={onLeave} >
                <User width={15}/>
                <span>{session.status === 'authenticated' ? 'Profile' : 'Login'}</span>
            </Button>

            <div className={`w-[87px] h-[80px] absolute z-20 bg-[#fff] mt-2 rounded-sm shadow transition duration-300 ${session.status === 'authenticated' ? (Bar ? '' : 'hidden') : 'hidden'}`} onMouseEnter={onEnter} onMouseLeave={onLeave}> {/* user profile navbar */}
                <div className="w-full h-1/2 flex items-center justify-center hover:bg-[#fffaf6] hover:text-[#f97316] cursor-pointer rounded-sm">
                    <span className="font-bold text-[13px]">Orders</span>
                </div>
                <span className="w-full h-[1px] bg-gray-500/30 float-left" />
                <div className="w-full h-1/2 flex items-center justify-center hover:bg-[#fffaf6] hover:text-[#f97316] cursor-pointer rounded-sm" onClick={() => signOut({ callbackUrl: '/' })}>
                    <span className="font-bold text-[13px]">Logout</span>
                </div>
            </div>

            <div className={`fixed top-0 left-0 w-full h-full z-20 bg-black/30 ${Modal ? '' : 'hidden'}`}> {/* user login/register */}
                <div className="w-full h-full flex items-center justify-center">
                    <Tabs defaultValue="login" className="w-[400px] bg-white rounded-md z-30">
                        <div className="flex justify-end">
                            <X  className="cursor-pointer mr-5 mt-5" onClick={() => setModal(false)} width={15} height={15} fill="#f97316"/> 
                        </div>

                        <TabsList className='w-full bg-white mt-10'>
                            <div className="grid w-[300px] grid-cols-2 rounded-sm bg-[#f5f5f4]">
                                <TabsTrigger value="login">Login</TabsTrigger>
                                <TabsTrigger value="register">Register</TabsTrigger>
                            </div>
                        </TabsList>

                        <TabsContent value="login">
                            <Login />
                        </TabsContent>

                        <TabsContent value="register">
                            <Register />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}