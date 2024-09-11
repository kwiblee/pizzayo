import Image from "next/image"
import Link from "next/link"

export default function SearchItem({id, name, imageurl, price}) {
    return (
        <Link href={`${window.location.origin}/product/${id}`}>
            <div key={id} className="w-full h-[50px] hover:bg-[#fffaf4] cursor-pointer my-2 flex">
                <div className="w-[50px] h-[50px] flex justify-center items-center mx-1">
                    <Image src={imageurl} width={30} height={30} alt={name} />
                </div>
                <div className="h-full flex justify-center items-center">
                    <span className="text-[16px] font-semibold">{name}</span>
                </div>
                <div className="h-full flex justify-center items-center ml-3">
                    <span className="text-[13px] font-medium text-[#858585]">{price} $</span>
                </div>
            </div>
        </Link>
    )
}