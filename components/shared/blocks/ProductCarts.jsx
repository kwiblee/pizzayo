import ProductCart from "../parts/ProductCart";
import { useEffect, useRef } from "react";
import { useIntersection } from 'react-use';
import { useProductStore } from "../hooks/useProductStore";

export default function ProductCarts({items, text}) {
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.1,
    });

    useEffect(() => {
      if (intersection && intersection.isIntersecting) {
        useProductStore.getState().changeProduct(text)
      }
    }, [intersection, text]);

    return (
        <div>
            <div>
                <span className="text-3xl font-black ml-[39px]" id={text} ref={intersectionRef}>{text}</span>
            </div>
            <div className="flex flex-wrap mb-[50px]">
                {items.map(item => item.type.toLowerCase() === text.toLowerCase() ? <ProductCart key={item.id} {...item}/> : <></>)}
            </div>
        </div>
    )
}