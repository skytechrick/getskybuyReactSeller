import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OnboardingProcessBusiness(){


    const [onboarder, setOnboarder] = useState(null)

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
                    setOnboarder(data.data);

                    
                } else {
                    alert("Session expired, please login again");
                    localStorage.removeItem("onboardAccessToken");
                    navigate("/onboarding/login");
                }
                
            } catch (error) {
                console.log("Error fetching data:", error);
                alert("Something went wrong, please login again");
            }
        };

        fetchData();
    }, []);
    return (
        <div>
        
            <div className="w-4/5 my-4 mx-auto">
                <h2 className="text-lg font-semibold">Step 2: Business -  About business</h2>
                <p className="text-sm text-gray-500">Hello, {onboarder?.personalDetails.name || "Guest"} | Complete your business profile</p>

                <div className="mt-4">
                    {/* {
                        onboarder && (
                            
                        )
                    } */}
                </div>
                
            </div>

        </div>
    )
}