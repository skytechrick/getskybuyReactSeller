import { InputField } from "./ui/inputField.jsx";
import { Button } from "./ui/button.jsx";
import { useState , useEffect } from "react";
import { useNavigate , Link } from "react-router-dom";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const url = import.meta.env.VITE_SELLER_BACKEND;

    const formSubmit = (e) => {
        e.preventDefault();
        
        if(email === ""){
            alert("Email cannot be empty.");
        }

        if(password === ""){
            alert("Password cannot be empty.");
        }

        fetch(`${url}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(async res=> {
            if(res.ok){
                return res.json();
            }else{
                const data = await res.json();
                alert(data.message);
            }
        }).then(data => {
            if(data){
                const { token } = data;
                localStorage.setItem("onboardAccessToken", token);
                navigate("/onboarding");
            }
        }).catch(err => {
            console.error(err);
        });
    }

    useEffect(() => {
        
        const data = localStorage.getItem("onboardAccessToken");
        if(data){
            navigate("/onboarding");
        }

    }, []);

    return (
        <div className="md:w-full xl:w-4/5 mx-auto flex justify-center items-center mt-16 mb-16">
            <div className="mx-3 w-full bg-white flex justify-center items-center rounded-xl shadow-lg overflow-hidden">
                <div className="h-[400px] w-2/5 bg-gradient-to-r from-orange-400 to-red-400 text-white flex justify-center items-center flex-col">
                    <h2 className="font-bold text-2xl md:text-3xl">Welcome new sellers</h2>
                    <p>Complete your onboarding process and start selling!</p>
                </div>
                <div className="w-3/5 bg-white p-10 px-20">
                    <h2 className="font-bold text-2xl">Login to your onboarding account</h2>
                    <p>Enter your credentials!</p>
                    <form onSubmit={formSubmit}>
                        <InputField setValue={setEmail} value={email} required={true} autoFocus={true} placeholder="Email"/>
                        <InputField setValue={setPassword} value={password} required={true} autoFocus={false} type={showPassword? "text": "password"} placeholder="Password"/>
                        <div className="my-[2px] mb-1 flex justify-between items-center">
                            <div>
                                <input
                                    id="showPassword"
                                    type="checkbox"
                                    className="w-4 mr-1 cursor-pointer"
                                    onChange={(e) => setShowPassword(e.target.checked)}
                                    checked={showPassword}
                                    />
                                <label htmlFor="showPassword" className="cursor-pointer select-none relative bottom-[1px]">Show password</label>
                            </div>
                            <div>
                                <a href="#" className="text-sm text-blue-700 hover:underline">Forgot password?</a>
                            </div>
                        </div>
                        <Button children="Submit" type="submit"/>

                        <p className="text-sm text-center mt-4">Don't have an account? <Link to="/onboarding/register" className="text-blue-500 cursor-pointer">Register</Link></p>
                    </form>

                </div>
            </div>

        </div>
    )

}