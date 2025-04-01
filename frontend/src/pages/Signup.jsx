import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";


export function Signup() {
    return <div className="m-4">
        <InputBox title={"email"} />
        <InputBox title={"username"} />
        <InputBox title={"password"} />
        <Button title={"Signup"}/>

    </div>
}