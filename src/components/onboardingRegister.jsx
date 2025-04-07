import { Button } from "./ui/button.jsx"
import { InputField } from "./ui/inputField.jsx";
import { useState } from "react";
import { Link , useNavigate , Outlet } from "react-router-dom";


export default function OnboardingRegister() {

    const [name, setName] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !pinCode || !email || !mobileNumber || !password) {
            alert("Please fill all the fields");
            return;
        }

        if(name.length < 3) {
            alert("Name must be at least 3 characters long");
            return;
        }
        if(pinCode.length !== 6) {
            alert("Please enter a valid 6 digit pin code");
            return;
        }
        if(mobileNumber.length !== 10) {
            alert("Please enter a valid 10 digit mobile number");
            return;
        }
        if(password.length < 8) {
            alert("Password must be at least 8 characters long");
            return;
        }
        // if(!/^[a-zA-Z0-9]+$/.test(password)) {
        //     alert("Password must contain at least one letter and one number");
        //     return;
        // }


        const data = {
            name: name,
            pinCode: pinCode,
            email: email,
            mobileNumber: mobileNumber,
            password: password
        }

        const url = import.meta.env.VITE_SELLER_BACKEND;

        fetch(`${url}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then( async (res) => {
            if(res.ok) {
                return res.json();
            }else{
                const data = await res.json();
                alert(data.message);
            }
        }).then((data) => {
            if(data) {
                localStorage.setItem("onboardingOtp", data.token);
                alert(data.message);
                navigate("/onboarding/register/verify-otp");
            }
        }).catch((err) => {
            alert("Something went wrong");
            console.log(err);
        });
    }

    return (
        <>
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-[98%] md:w-4/5 m-10 rounded-lg shadow-md bg-white flex flex-row overflow-hidden">
                    <div className="w-3/5 p-3">


                        <div className="w-full p-16 pb-3">
                            <h1 className="font-bold text-2xl md:text-3xl">Create your account</h1>
                            <p>Fill in the details below to create your account.</p>
                        </div>
                        <form className="w-full flex flex-col items-center justify-center px-16" onSubmit={handleSubmit}>
                            <InputField id="registerName" type="text" placeholder="Name" required={true} autoFocus={true} value={name} setValue={setName} />
                            
                            <InputField id="registerPinCode" type="text" placeholder="PIN code" max={6} required={true} value={pinCode} setValue={setPinCode} />
                            <InputField id="registerMobileNumber" type="text" placeholder="Mobile number" max={10} required={true} value={mobileNumber} setValue={setMobileNumber} />

                            <InputField id="registerEmail" type="text" placeholder="Email" required={true} value={email} setValue={setEmail} />
                            <InputField id="registerPassword" type={showPassword?"text": "password"} placeholder="Password" required={true} value={password} setValue={setPassword} />
                            <div className="w-full my-[2px] mb-1 flex justify-between items-center">
                                <div>
                                    <input
                                        id="showPassword"
                                        type="checkbox"
                                        className="w-4 mr-1 cursor-pointer"
                                        onChange={(e) => setShowPassword(e.target.checked)}
                                        checked={showPassword}
                                    />
                                    <label htmlFor="showPassword" className="cursor-pointer text-sm select-none relative bottom-[1px]">Show password</label>
                                </div>
                            </div>
                            <Button type="submit" children="Register"/>
                            <p className="text-sm mt-4">Already have an onboarding account? <Link to="/onboarding/login" className="text-blue-500 cursor-pointer">Login</Link></p>
                        </form>

                    
                    </div>
                    <div className="w-3/5 p-3 bg-gradient-to-r from-orange-400 to-red-400 text-white flex flex-col items-center justify-center h-[590px]">
                        <h1 className="font-bold text-2xl text-center md:text-3xl animate-slideInRight"><span className="text-6xl relative bottom-5">📝</span> <br />Register now</h1>
                        <p className="animate-slideInRight">Create your seller account and turn your shop into an online success story!</p>
                    </div>
                </div>



            </div>
            <Outlet />
        </>

    )
}