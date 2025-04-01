
export function Button({title,onClick}) {
    return <div>
        <button onClick={onClick} className="px-3 border border-black mt-2 cursor-pointer">
            {title}
        </button>
    </div>
}