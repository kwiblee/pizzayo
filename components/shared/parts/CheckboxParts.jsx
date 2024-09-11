import { Checkbox } from "@/components/ui/checkbox"
import { useProductStore } from "../hooks/useProductStore"

export default function CheckboxParts({name, onCheckedChange}) {
    const checkboxFilter = (name, status) => {
        if (status) {
            let products = useProductStore.getState().productsFixed.filter(product => product.ingridients.toLowerCase().includes(name.toLowerCase()));
            useProductStore.getState().setProducts(products);
        }
    }

    return (
        <div className="flex gap-2 items-center mt-2">
            {/* onCheckedChange={(e) => checkboxFilter(name, e)} */}
            <Checkbox id={name} className="rounded-[6px] w-[20px] h-[20px] border-none bg-[#F1F1F1]" onCheckedChange={onCheckedChange}  /> 
            <label htmlFor={name} className="text-[15px] font-medium mt-[2px] cursor-pointer">{name}</label>
        </div>
    )
}