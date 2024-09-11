import Header from "@/components/shared/blocks/Header"
import Container from "@/components/shared/parts/Container"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AuthInput from "@/components/shared/parts/AuthInput"
import { Button } from "@/components/ui/button"

export default function Page() {
    return (
        <main>
            <Header hidden={true}/>
            <Container className='flex items-center justify-center'>

                <Tabs defaultValue="login" className="w-[300px]">

                    <TabsList className='grid w-full grid-cols-1'>
                        <TabsTrigger value="login">Restore Password</TabsTrigger>
                    </TabsList>

                    <div className="w-full flex items-center justify-center my-3">
                        <div className="text-center w-[250px]">
                            <span className="text-gray-400">To restore, enter your email, we will send a link to restore the password</span>
                        </div>
                    </div>

                    <div className="w-full mt-10 flex justify-center">
                        <div className="w[300px]">
                            <form action="/api/auth/restore">
                                <AuthInput type='email' name='email' placeholder='Email' />
                                <Button className='w-full mt-3'>Restore</Button>
                            </form>
                        </div>
                    </div>
                </Tabs>

            </Container>
        </main>
    )
}