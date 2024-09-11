'use client'

import { Input } from "@/components/ui/input"
import { Search, X } from 'lucide-react';
import { useState , useEffect, useRef } from "react";
import SearchBlock from "../blocks/SearchBlock";
import { Api } from "@/components/services/api-client";

export default function SearchInput() {
    const clearBtnRef = useRef(null);

    const [searchValue, setSearchValue] = useState('');
    const [focus, setFocus] = useState(false) 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        searchValue.length > 0 ? clearBtnRef.current.classList.toggle('hidden', false) : clearBtnRef.current.classList.toggle('hidden', true)

        Api.products.search(searchValue)
          .then(items => setProducts(items))
    }, [searchValue])

    const preventEvent = () => {
        clearBtnRef.current.classList.toggle('hidden', false)
        setSearchValue('');
        setFocus(false)
    }

    return (
        <div>
            <div className={`fixed top-0 left-0 w-full h-full bg-black/30 z-20 ${focus ? '' : 'hidden'}`} onClick={preventEvent}></div>

            <div className="flex rounded-2xl h-11 items-center bg-gray-50 relative z-20">
                <Search className="text-gray-400 ml-3 h-5" />

                <Input 
                    onChange={e => setSearchValue(e.target.value)} 
                    value={searchValue}
                    type='text'
                    className='outline-none border-none bg-gray-50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0' 
                    placeholder='Search pizza...'
                    onClick={() => setFocus(true) }  
                />

                <X 
                    ref={clearBtnRef}
                    onClick={preventEvent}
                    className='text-gray-400 mr-4 hidden'
                />
            </div>

            <SearchBlock className={focus ? '' : 'hidden'} items={products} />
        </div>
    )
}