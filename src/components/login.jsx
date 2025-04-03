import { InputField } from "./ui/inputField.jsx";
import { useState } from "react";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="md:w-full xl:w-4/5 mx-auto flex justify-center items-center mt-10">
            <div className="mx-3 w-full bg-white flex justify-center items-center rounded-xl shadow-lg overflow-hidden">
                <div className="h-[300px] w-2/5 bg-gradient-to-r from-orange-300 to-red-300 text-white flex justify-center items-center flex-col">
                    <h2 className="font-bold text-2xl md:text-3xl">Welcome sellers</h2>
                    <p>Effortless selling starts here – Log in!</p>
                </div>
                <div className="w-3/5 bg-white p-10">
                    <h2 className="font-bold text-2xl">Login</h2>
                    <p>Enter your credentials!</p>
                    <InputField setValue={setEmail} value={email} id="loginSellerEmail" placeholder="Email"/>
                    <InputField setValue={setPassword} value={password} id="loginSellerPassword" type={showPassword? "text": "password"} placeholder="Password"/>
                    <div className="my-[2px]">
                        <input
                            id="showPassword"
                            type="checkbox"
                            className="w-4 mr-1 cursor-pointer"
                            onChange={(e) => setShowPassword(e.target.checked)}
                            checked={showPassword}
                        />
                        <label htmlFor="showPassword" className="cursor-pointer select-none relative bottom-[1px]">Show password</label>
                    </div>
                </div>
            </div>

        </div>
    )

}