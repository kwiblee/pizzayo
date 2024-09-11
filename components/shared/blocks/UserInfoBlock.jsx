import { Input } from '@/components/ui/input'

export default function UserInfoBlock() {
    return (
        <div className="flex-1 mr-9 rounded-3xl bg-white mt-10">
            <div className="h-[79px] flex items-center justify-between px-9 border-b-[1px]">
                <span className="font-extrabold text-[20px]">2. Personal information</span>
            </div>
            <div className='w-full h-[250px] flex flex-col py-6'>
                <div className='w-full h-1/2 flex items-center justify-center gap-7'>
                    <div className='w-[40%]'>
                        <label htmlFor="name" className='font-extrabold'>Name</label>
                        <Input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className='w-[40%]'>
                        <label htmlFor="surname" className='font-extrabold'>Surname</label>
                        <Input type="text" name="surname" placeholder="Surname" />
                    </div>
                </div>
                <div className='w-full h-1/2 flex items-center justify-center gap-7'>
                    <div className='w-[40%]'>
                        <label htmlFor="email" className='font-extrabold'>E-Mail</label>
                        <Input type="email" name="email" placeholder="E-Mail" />
                    </div>
                    <div className='w-[40%]'>
                        <label htmlFor="phone" className='font-extrabold'>Phone number</label>
                        <Input type="text" name="phone" placeholder="Phone number" />
                    </div>
                </div>
            </div>
        </div>
    )
}