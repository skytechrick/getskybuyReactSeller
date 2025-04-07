import { Button } from "./ui/button.jsx";
import { InputField } from "./ui/inputField.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function OnboardingVerifyOtp() {

    const [otp, setOtp] = useState("");

    const navigate = useNavigate();
    const closeOtp = () => {
        localStorage.removeItem("onboardingOtp");
        navigate("/onboarding/register");
    }

    // onboardAccessToken

    const formSubmit = (e) => {
        e.preventDefault();
        const otpToken = localStorage.getItem("onboardingOtp");
        if(!otpToken) {
            alert("Please enter your mobile number to receive OTP");
            navigate("/onboarding/register");
        }
        if(otp.length !== 6) {
            alert("Please enter a valid 6 digit OTP");
            return;
        }
        const data = {
            otp: otp
        }

        const url = import.meta.env.VITE_SELLER_BACKEND;
        fetch(`${url}/api/auth/verify-otp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${otpToken}`
            },
            body: JSON.stringify(data)
        }).then(async(response) => {
            if(response.ok) {
                return response.json();
            } else {
                const data = await response.json();
                if(data.message === "Invalid OTP") {
                    alert("Please enter a valid OTP");
                } else if(data.message === "OTP expired") {
                    alert("OTP expired, please resend OTP");
                    localStorage.removeItem("onboardingOtp");
                    navigate("/onboarding/login");
                }else{
                    throw new Error(data.message);
                }
            }
        }).then((data) => {
            if(data) {
                alert(data.message);
                localStorage.removeItem("onboardingOtp");
                localStorage.setItem("onboardAccessToken", data.token);
                navigate("/onboarding");
            }
        }).catch((error) => {
            alert(error.message);
        });
    }


    useEffect(() => {
        const otpToken = localStorage.getItem("onboardingOtp");
        // if(!otpToken) {
        //     navigate("/onboarding/register");
        // }
    }, []);

    return (
        <div className="w-screen h-0 flex flex-col items-center justify-center absolute top-10">
            <div onClick={closeOtp}  className="fixed top-0 left-0 w-full h-full bg-gray-200 opacity-50 z-10"></div>

            <div className="absolute top-10 flex flex-col items-center justify-center bg-white p-14 rounded-lg shadow-md w-96 z-10">
                <div className="w-full absolute top-4 right-4 flex flex-row items-center justify-between p-2">
                    <div onClick={closeOtp} className="block ml-auto text-4xl w-10 h-10 cursor-pointer text-center rounded-full transition-all duration-200 active:bg-gray-400 hover:bg-gray-300 rotate-45">+</div>
                </div>
                <h1 className="text-2xl font-bold mb-2">Verify OTP</h1>

                <form onSubmit={formSubmit} className="w-full flex flex-col items-center justify-center">
                    <p className="text-sm mb-4">Please enter the OTP sent to your mobile number</p>
                    <InputField max={6} autoFocus={false} value={otp} setValue={setOtp} type="text" placeholder="Enter OTP"/>
                    <p className="w-full text-right mb-2 text-sm">Don't recieve OTP? <span className="text-blue-700 font-bold hover:underline cursor-pointer">Resend</span></p>
                    <Button type="submit" children="Verify">Verify</Button>
                </form>
            </div>
        </div>
    );
}