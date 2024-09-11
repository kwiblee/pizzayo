import { Input } from "@/components/ui/input"

export default function AuthInput({name, placeholder, type, className, value, onChange}) {
    return (
        <div className={`${className} flex justify-center`}>
            <div className="w-[300px]">
                <label className="block text-sm font-medium">{placeholder}</label>
                <Input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
            </div>
        </div>
    )
}