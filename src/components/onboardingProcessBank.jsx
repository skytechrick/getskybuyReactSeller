import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button.jsx";

export default function OnboardingProcessBank(){


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
                <h2 className="text-lg font-semibold">Step 3: Bank account - Seamless payment</h2>
                <p className="text-sm text-gray-500">Hello, {onboarder?.personalDetails.name || "Guest"} | Add your bank account details</p>

                <div className="mt-4">
                    {/* {
                        onboarder && (
                            
                        )
                    } */}

                    <div>
                        <div className="flex flex-row justify-between gap-4 my-4">
                            <div className="w-24">
                                <Button onClick={()=>{navigate("/onboarding/process/business")}} type="button" children={"Back"} disabled={false}/>
                            </div>
                            <div className="w-24">
                                <Button onClick={()=>{navigate("/onboarding/process/pickup")}} type="button" children={"Next"} disabled={onboarder?.process.bankDetailsUploaded?false:true}/>
                            </div>
                            
                        </div>

                        <hr />
                        <div className="flex flex-col gap-2 mt-4">
                            <p className="text-sm text-gray-500">Please provide information about your business.</p>
                        </div>
                        
                    </div>
                </div>
                
            </div>

        </div>
    )
}