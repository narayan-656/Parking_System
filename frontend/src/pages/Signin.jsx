import { useState } from "react";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Signin() {

    const [username , setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="m-4">
        <InputBox title={"username"} onChange={(e) => {
            setUsername(e.target.value);
        }}/>
        <InputBox title={"password"} onChange={(e) => {
            setPassword(e.target.value);
        }}/>
        <Button title={"Signup"} onClick={async () => {
          const res =  await axios.post("http://localhost:3000/api/v1/admin/signin" , {
            username:username,
            password:password
          });

          const token = res.data.token;

          localStorage.setItem("token",token);

          if(token) {
            navigate(`/dashboard`);
            }


        }}/>
    </div>
}