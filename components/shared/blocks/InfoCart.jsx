import { Input } from "@/components/ui/input"

export default function InfoBlock() {
    return (
        <div className="flex-1 mr-9 rounded-3xl bg-white mt-10 h-[200px] mb-10">
            <div className="h-[79px] flex items-center justify-between px-9 border-b-[1px]">
                <span className="font-extrabold text-[20px]">3. Delivery address</span>
            </div>
            <div className="flex items-center justify-center flex-wrap">
                <div className="w-[90%] h-[100px] flex items-center">
                    <div className="w-full">
                        <label htmlFor="" className="font-extrabold">Enter the address</label>
                        <Input />
                    </div>
                </div>
            </div>
        </div>
    )
}