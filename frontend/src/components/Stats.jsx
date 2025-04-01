import { useEffect, useState } from "react";
import { AppBar } from "./AppBar";
import { CustomerComp2 } from "./CustomerComp2";
import axios from "axios";

export function Stats() {

    const [customers,setCustomers] = useState([]);
    const [filter,setFilter] = useState("");
    const [id,setId] = useState("");

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

    return <div className="flex flex-col gap-4"> 
        <AppBar/>
        <input  className="border rounded p-1 px-2 focus:outline-none mx-3" placeholder="Search Customers..." type="text" onChange={(e) => {
            setFilter(e.target.value)
        }} />

        <div className="flex justify-between px-3">
            <input  className="border  rounded p-1 px-2 w-full  focus:outline-none" placeholder="Enter the unique id..." type="text" onChange={(e) => {
                setId(e.target.value);
                console.log(e.target.value)
            }} />
            <button className="p-2 px-4 border bg-gray-100 " onClick={async () => {
                const res = await axios.post("http://localhost:3000/api/v1/timer/findCustomer" ,{
                    customerId:id
                }, {
                    headers: {
                        Authorization : `Bearer ${localStorage.getItem("token")}`
                    }
                });



            } }> 
                Proceed 
            </button>
        </div>

        {customers.map(customer => <CustomerComp2 onClick={(e) => {
            console.log(e.target.value)
        }} name={customer.name}/>)}
    </div>
}