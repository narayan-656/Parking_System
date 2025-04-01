

export function CustomerDash({name,totalFare}) {
    return <div className="flex border mx-3 p-3 px-5 items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="border p-2 w-[40px] rounded-full text-center"> 
                {name.charAt(0).toUpperCase()}
            </div>
            {name}
        </div>

        
        <div className="flex gap-2">
            <label > Total Fare:</label>
            Rs {totalFare}
        </div>
        
    </div>
}