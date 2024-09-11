import AuthInput from "../parts/AuthInput"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react";
import { Api } from "@/components/services/api-client";
import { toast } from "sonner"
import bcrypt from 'bcryptjs'

export default function Login() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        if (!email || !password) {
            console.error('Email and password are required');
            return;
        }

        try {
            const hash = bcrypt.hashSync(password, 10);
            let data = await Api.users.user(email)

            if (data.length === 0) {
                toast('Error', {
                    description: 'User with this email does not exist'
                })

                throw new Error("User with this email does not exist");
            }

            data = data[0];

            const match = await bcrypt.compare(password, data.password);

            if (!match) {
                toast('Error', {
                    description: 'Wrong password'
                })

                throw new Error("Wrong password");
            }

            const res = await signIn('credentials', {
                name: data.name,
                surname: data.surname,
                email: data.email,
                // redirect: true,
                // callbackUrl: '/',
            });

            if (res?.error) {
                toast('Error', {
                    description: 'Something went wrong'
                })

                throw new Error(res.error);
            }
        } catch (error) {
            console.error('An unexpected error occurred', error);
        }
    }

    return (
        <div className="w-full my-[30px]">

            <form onSubmit={handleSubmit} className="login-form">
                <AuthInput name='email' placeholder='Email' type='email' className='mt-3' />
                <AuthInput name='password' placeholder='Password' type='password' className='mt-3' />

                <div className="w-full flex justify-center">
                    <Button type='submit' className='w-[300px] mt-5'>Login</Button>
                </div>
            </form>

        </div>
    )
}