
export function CustomerComp2({name,onClick}){    
    return <div className="flex border mx-3 p-3 px-4 items-center justify-between " onClick={onClick}>
        <div className="flex items-center gap-2">
            <div className="border p-2 w-[40px] rounded-full text-center"> 
                {name.charAt(0).toUpperCase()}
            </div>
            {name}
        </div>

        <div className="flex w-[700px] justify-between items-center">
            <div className="text-green-600">
                Idle
            </div>

            <div>
                Previous Fare:
            </div>

            <div>
                Timer
            </div>
        </div>
    </div>
}