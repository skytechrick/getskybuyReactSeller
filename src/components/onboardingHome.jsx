
import { useState , useEffect } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import { Button } from './ui/button';


export default function OnboardingHome() {

    
    const [name, setName] = useState("Guest");
    const navigate = useNavigate();
    
    const url = import.meta.env.VITE_SELLER_BACKEND;
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("onboardAccessToken");
                const response = await fetch(`${url}/api/onboarding/account`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setName(data.data.personalDetails.name);
                    
                } else {
                    alert("Session expired, please login again");
                    localStorage.removeItem("onboardAccessToken");
                    navigate("/onboarding/login");
                }
                
            } catch (error) {
                alert("Something went wrong, please login again");
            }
        };

        fetchData();
    }, []);

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h6>Hello, {name}</h6>
            <h1 className='text-2xl sm:text-3xl font-bold text-center'>Welcome to Onboarding</h1>
            <p className='text-md sm:text-xl text-center px-5'>Welcome new seller complete your onboarding and start selling!</p>
            <div className='w-36 mt-5'>

                <Button type="button" onClick={()=>{navigate("/onboarding/profile")}} children={"Go to profile"}/>
            </div>
        </div>
    );

}