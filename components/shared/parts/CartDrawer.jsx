import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import CartItem from "./CartItem"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CartDrawer({ children, items }) {
    return (
        <Sheet className='w-full'>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className='bg-sheet w-full'>

            <div className="h-full">
                <SheetHeader>
                    <SheetTitle className='font-medium'>There are <span className="font-bold">{items.length} products</span> in the cart</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-2 -mx-6 mt-5 h-[calc(100%_-_120px)] overflow-y-auto">
                    {items.map(item => (
                        <CartItem key={item.name} {...item} />
                    ))}
                </div>
            </div>

            <SheetFooter className="w-[88%] absolute bottom-0 mb-4">

                <div className="w-full">
                    <div className="w-full flex items-center justify-between mb-1">
                        <p className="text-[15px] font-bold">Total: <span className="text-[15px] font-bold">{items.reduce((acc, value) => acc + value.price, 0).toFixed(2)} $</span></p>
                    </div>

                    <Link href='/checkout'>
                        <Button className="w-full h-12 text-base">Place an order</Button>
                    </Link>
                </div>

            </SheetFooter>

            </SheetContent>
        </Sheet>
    )
}