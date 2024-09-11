import Link from "next/link"
import Image from "next/image"
import ItemButton from "../parts/ItemButton";

export default function ProductCart({id, name, description, imageurl, price}) {
    return (
        <div className="w-[285px] h-[470px] rounded-sm my-7 ml-[39px] mb-10">
            <div className="w-full h-[285px] bg-[#FFF7EE] rounded-[15px]">
                <Link href={`/product/${id}`}>
                    <div className="w-full h-full flex items-center justify-center">
                        <Image src={imageurl} width='220' height='220' alt={name} className="hover:translate-y-[2px]" />
                    </div>
                    <div>
                        <div className="w-full mt-3">
                            <span className="text-[20px] font-bold mt-5">{name}</span>
                        </div>
                        <div className="w-full h-[123px]">
                            <span className="text-[#B1B1B1] leading-5">{description}</span>
                        </div>
                    </div>
                </Link>
                <div className="w-full h-[42px] flex justify-between items-center">
                        <span className="font-medium text-[17px]">from <span className="font-extrabold text-[19px]">{price} $</span></span>
                        <ItemButton itemData={{id, name, description, imageurl, price}} />
                </div>
            </div>
        </div>
    )
}