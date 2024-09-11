import AuthInput from "../parts/AuthInput"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"
import { Api } from "@/components/services/api-client";
import bcrypt from 'bcryptjs'
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Register() {
    const [data, setData] = useState({ name: "", surname: "", email: "", password: "" });
    const [agree, setAgree] = useState(false);

    const handler = async () => {
        const { name, surname, email, password } = data;

        try {
            const checkUser = await Api.users.user(email)

            if (checkUser.length !== 0) {
                toast('Error', {
                    description: 'User with this email already exists'
                })

                throw new Error("User with this email already exists");
            }

            bcrypt.hash(password, 10, async (err, hash) => {
                if (err) {
                    throw new Error(err);
                }

                const response = await fetch("/api/auth/register", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, surname, email, hash }),
                });
    
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
    
                toast('Success', {
                    description: 'Registration successful'
                })

                const res = await signIn('credentials', {
                    name: name,
                    surname: surname,
                    email: email,
                    redirect: true,
                    callbackUrl: '/',
                });
    
                if (res?.error) {
                    toast('Error', {
                        description: 'Something went wrong'
                    })
    
                    throw new Error(res.error);
                }
            })
        } catch (err) {
            toast('Error', {
                description: 'Registration failed'
            })
        }
    } 

    return (
        <div className="w-full my-[30px]">
            <form>
                <AuthInput name='name' placeholder='Name' type='text' className='mt-2' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                <AuthInput name='surname' placeholder='Surname' type='text' className='mt-2' value={data.surname} onChange={(e) => setData({ ...data, surname: e.target.value })} />
                <AuthInput name='email' placeholder='Email' type='email' className='mt-2' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <AuthInput name='password' placeholder='Password' type='password' className='mt-2' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />

                <div className="w-full mt-4 flex justify-center">
                    <div className="w-[300px]">
                        <div className="flex gap-2 items-center">
                            <Checkbox id='confirm'  className="rounded-[6px] w-[20px] h-[20px] border-none bg-[#F1F1F1]" onCheckedChange={(e) => setAgree(e)} />
                            <label htmlFor='confirm' className="text-[15px] font-medium mt-[1px] cursor-pointer">Accept terms and conditions</label>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <Button className='w-[300px] mt-5' onClick={handler} disabled={agree && data.name && data.surname && data.email && data.password ? false : true} >Register</Button>
                </div>

            </form>
        </div>
    )
}