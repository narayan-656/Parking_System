import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Dashboard } from "./pages/Dashbord"
import { Customers } from "./components/Customers"
import { Stats } from "./components/Stats"

export default function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>} />
        <Route path="/" element={<Dashboard/>} />
        <Route path="/customers" element={<Customers/>} />
        <Route path="/status" element={<Stats/>} />
      </Routes>
    </BrowserRouter>
  </div>
}