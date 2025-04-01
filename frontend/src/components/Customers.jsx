import { useEffect, useState } from "react";
import { AppBar } from "./AppBar";
import axios from "axios";
import { CustomerComp } from "./CustomerComp";

export function Customers() {

    const [customers, setCustomers] = useState([]);
    const [filter,setFilter] = useState("");

    useEffect(() => {
        async function fetchCustomers() {
            const res = await axios.get(`http://localhost:3000/api/v1/admin/bulk?filter=${filter}` ,{
                headers :{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            setCustomers(res.data.customers)
        };

        fetchCustomers();
    },[filter])

    return <div className="flex flex-col gap-3">
        <AppBar/>
        <div className="flex justify-between px-3">
            <input  className="border  rounded p-1 px-2 w-full  focus:outline-none" placeholder="Search Customers..." type="text" onChange={(e) => {
                setFilter(e.target.value)
            }} />
            <button className="p-2 px-4 border bg-gray-100">
                Add 
            </button>
        </div>
        {customers.map(customer => <CustomerComp name={customer.name} totalFare={customer.totalFare}/>)}

    </div>
}