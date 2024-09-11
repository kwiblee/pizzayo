import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Radio() {
    return (
        <RadioGroup defaultValue="traditional">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="traditional" id="traditional" className="w-[15.5px]" />
                <label htmlFor="traditional" className="cursor-pointer">Traditional</label>
            </div>
            <div className="flex items-center space-x-2" >
                <RadioGroupItem value="thin" id="thin" className="w-[15.5px]" />
                <label htmlFor="thin" className="cursor-pointer">Thin</label>
            </div>
        </RadioGroup>
    ) 
}