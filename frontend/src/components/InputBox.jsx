

export function InputBox({title,onChange}) {
    return <div className="">
        <div>
            {title}
        </div> 
        <div>
            <input onChange={onChange} className="border border-black" type="text"  />
        </div>
    </div>
} 