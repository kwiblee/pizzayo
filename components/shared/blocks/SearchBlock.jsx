import SearchItem from "../parts/SearchItem"

export default function SearchBlock({className, items}) {
    return (
        <div className={`w-full relative z-20 ${className}`}>
            <div className="w-full absolute bg-[#f9fafb] rounded-md mt-3">
                {items.map(item => <SearchItem key={item.id} {...item} />)}
            </div>
        </div>
    )
}