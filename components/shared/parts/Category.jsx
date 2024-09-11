export default function Category({text, className, handler}) {
    return (
        <div className={`h-full flex justify-center items-center rounded-sm cursor-pointer ${className}`} onClick={handler} data-name={text}> 
            <span className="text-sm px-6 font-medium">{text}</span>
        </div>
    )
}