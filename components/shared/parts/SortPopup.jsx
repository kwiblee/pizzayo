'use client'

import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useFilters } from '@/components/shared/hooks/useFilters';
import { useEffect } from 'react';
import { useProductStore } from '@/components/shared/hooks/useProductStore';

export default function SortPopup() {
  const sort = useFilters(state => state.sort);

  useEffect(() => {
    switch (sort.toLowerCase()) {
      case "popular first" :
        sortByPopular()
        break;
      case "inexpensive first" :
        sortByInexpensive()
        break;
      case "expensive first" :
        sortByExpensive()
        break;
    }
  }, [sort])

  const shuffle = async (array) => {
    return array.sort(() => Math.random() - 0.5);
  }

  const sortByPopular = () => {
    shuffle(useProductStore.getState().products)
      .then((products => {
        useProductStore.getState().setProducts([]);
        products.map(product => useProductStore.getState().addProducts(product))
      }))
  }

  const sortByInexpensive = () => {
    let products = useProductStore.getState().products.sort((a, b) => a.price - b.price)
    useProductStore.getState().setProducts([]);
    products.map(product => useProductStore.getState().addProducts(product))
  }

  const sortByExpensive = () => {
    let products = useProductStore.getState().products.sort((a, b) => b.price - a.price)
    useProductStore.getState().setProducts([]);
    products.map(product => useProductStore.getState().addProducts(product))
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className={cn('inline-flex items-center gap-1 bg-gray-50 px-5 h-[40px] rounded-sm cursor-pointer')}>
          <ArrowUpDown className="w-4 h-4" />
            <b>Sorting:</b>
    
            <b className="text-primary">{sort}</b>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[240px]">
            <ul>
              <li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md" onClick={() => useFilters.getState().setSort('Popular first')}>
                Popular first
              </li>
              <li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md" onClick={() => useFilters.getState().setSort('Inexpensive first')}>
                Inexpensive first
              </li>
              <li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md" onClick={() => useFilters.getState().setSort('Expensive first')}>
                Expensive first
              </li>
            </ul>
          </PopoverContent>
        </Popover>
    )
}