'use client'

import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { useEffect, useState, useRef } from "react"
import CheckboxParts from "../parts/CheckboxParts"
import Radio from "../parts/Radio"
import { useFilters } from "../hooks/useFilters"
import { useProductStore } from "../hooks/useProductStore"

const filtersIngridients = ['Chicken', 'Mozzarella', 'Cheddar', 'Ham', 'Cucambers', 'Tomato Sauce', 'Sausage', 'Pineapples']

export default function Filters() {
    const [sliderValue, setValue] = useState(0);
    const [ingridients, setIngridients] = useState([]);

    const minValueRef = useRef(null);
    const maxValueRef = useRef(null);

    const priceFilter = () => {
        useFilters.getState().setPrice([minValueRef.current.value, maxValueRef.current.value]);

        let products = useProductStore.getState().productsFixed.filter(product => product.price >= minValueRef.current.value && product.price <= maxValueRef.current.value);

        useProductStore.getState().setProducts(products);
    }

    const ingridientsFilter = () => {
        let products = useProductStore.getState().products.filter(product => ingridients.every(item => product.ingridients.toLowerCase().includes(item.toLowerCase())));
        useProductStore.getState().setProducts(products);
    }

    useEffect(() => {
        minValueRef.current.value = sliderValue;

        priceFilter()
        ingridientsFilter()
    })

    const addIngridient = (name) => {
        if (ingridients.includes(name)) {
            setIngridients(ingridients.filter(item => item !== name))
        } else {
            setIngridients([...ingridients, name])
        }
    }

    return (
        <div>
            <div className="border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Price from and to:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" min={0} max={300} defaultValue={0} ref={minValueRef} placeholder="0" onChange={(e) => priceFilter(e.target.value)} />
                    <Input type="number" min={100} max={300} defaultValue={300} ref={maxValueRef} placeholder="300" onChange={(e) => priceFilter(e.target.value)} />
                </div>
                <Slider className="z-0 cursor-pointer" defaultValue={[0]} min={0} max={300} step={1} onValueChange={(e) => setValue(e[0])} />
            </div>

            <div className="mt-5 border-b border-b-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Ingridiens:</p>
                <div className="flex-col gap-3 mb-5">
                    {
                        filtersIngridients.map((item, index) => (
                            <CheckboxParts key={index} name={item} onCheckedChange={(checked) => addIngridient(item)} />
                        ))
                    }
                </div>
            </div>

            <div className="mt-5 border-b border-b-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Type of dough:</p>
                <div className="flex-col gap-3 mb-5">
                    <Radio />
                </div>
            </div>


        </div>
    )
}