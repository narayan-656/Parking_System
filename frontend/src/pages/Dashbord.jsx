import axios from "axios"
import { useEffect, useState } from "react";
import { AppBar } from "../components/AppBar";
import { CustomerDash } from "../components/CustomerDash";

export function Dashboard() {

    const [customer,setCustomer] = useState([]);
    const [filter,setFilter] = useState("");

    useEffect(() => {
        async function fetchCustomers() {
            const res = await axios.get(`http://localhost:3000/api/v1/admin/bulk?filter=${filter}` , {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("token")}`
                }
            });

            setCustomer(res.data.customers)
            console.log(res.data)

        }
        fetchCustomers();
    },[filter])

    return <div className="flex flex-col gap-4">
        <AppBar/>
        <input  className="border rounded p-1 px-2 focus:outline-none mx-3" placeholder="Search Customers..." type="text" onChange={(e) => {
            setFilter(e.target.value)
        }} />
        {customer.map(customer => <CustomerDash name={customer.name} totalFare={customer.totalFare}/>)} 
    </div>
}