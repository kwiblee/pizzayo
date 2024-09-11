'use client'

import Category from "@/components/shared/parts/Category";
import { useProductStore } from "@/components/shared/hooks/useProductStore";
import Link from "next/link";

const categories = ['Pizzas', 'Combos', 'Desserts', 'Drinks']

export default function Categories() {
    const category = useProductStore(state => state.product)

    return (
        <div className='h-full flex gap-1 bg-gray-50 rounded-sm'>
            {categories.map(categoryItem => (
                <Link href={`#${categoryItem}`} key={categoryItem}>
                    <Category key={categoryItem} text={categoryItem} className={category.toLowerCase() == categoryItem.toLowerCase() ? 'category-active' : ''} name={category} handler={() => useProductStore.getState().changeProduct(categoryItem)} />
                </Link>
            ))}
        </div>
    )
}
