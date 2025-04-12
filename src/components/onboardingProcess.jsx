import OnboardingProcessProfile from "./onboardingProcessProfile.jsx";
import { useEffect, useState } from "react";
import { useNavigate , Link, Outlet } from "react-router-dom";

function OnboardingCircle({ no = 1 , active = false , postition = "left-0" , to = "#" }) {
    return (

        <div className={`bg-gray-200 w-10 h-10 rounded-full absolute ${postition} -top-4 `}>
            <Link to={to} className={`${active? "bg-orange-700" : "bg-gray-200 border-2 border-gray-500"  } w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-700 hover:border-2 hover:bg-orange-200 transition-all duration-200`}>
                <span className={`${active? "text-white" : "text-orange-700" } font-bold`}>{no}</span>
            </Link>
            <div className={`
            ${
                no===1? "relative right-1" : 
                no===2? "relative right-2" :
                no===3? "relative left-[3px]" :
                no===4? "relative right-[2px]" : ""
            }
            `}>{
                                    no===1? "Profile" : 
                                    no===2? "Business" :
                                    no===3? "Bank" :
                                    no===4? "Pickup" : ""
            }</div>
        </div>
    )
}


export default function OnboardingProcess() {

    const [profileData, setProfileData] = useState(null);
    const [process, setProcess] = useState(false);
    const [widthCompletion, setWidthCompletion] = useState(`w-0`);

    const url = import.meta.env.VITE_SELLER_BACKEND;
    const navigate = useNavigate();


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

                const data = await response.json();
                if (response.ok) {
                    setProfileData(data.data);
                    setProcess(true);
                    if (data.data.process.profileCompletion) {
                        setWidthCompletion("w-1/3");
                    }
                    if (data.data.process.businessInformation) {
                        setWidthCompletion("w-2/3");
                    }
                    if (data.data.process.bankDetailsUploaded) {
                        setWidthCompletion("w-full");
                    }
                    if (data.data.process.pickupAddressAdded) {
                        setWidthCompletion("w-full");
                    }
                } else {
                    alert(data.message);
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
        <>
            <div className="bg-white flex flex-col items-center justify-center">
                <div className="w-4/5 p-6">

                    <h1 className="text-xl underline font-bold">Onboarding Process Profile</h1>
                    <p className="text-lg mt-2">This is the onboarding profile completion.</p>

                    <div className="w-full h-5 my-6 mb-14 relative top-0 flex items-center justify-center">
                        <div className="relative top-0 w-4/5 bg-gray-200 rounded-full">
                            <div className={`${widthCompletion} bg-orange-700 h-1 rounded-full transition-width duration-200`}></div>

                            {   
                                profileData === null? (
                                    <>
                                        <div>Loading</div>
                                    </>
                                ) : (
                                    <>
                                        <OnboardingCircle to={"/onboarding/process/profile"} postition="left-0" active={profileData.process.profileCompletion} no={1}/>
                                        <OnboardingCircle to={"/onboarding/process/business"} postition="left-1/3" active={profileData.process.businessInformation} no={2}/>
                                        <OnboardingCircle to={"/onboarding/process/bank"} postition="left-2/3" active={profileData.process.bankDetailsUploaded} no={3}/>
                                        <OnboardingCircle to={"/onboarding/process/pickup"} postition="-right-5" active={profileData.process.pickupAddressAdded} no={4}/>
                                    </>
                                )
                            }

                        </div>

                    </div>


                    {/* <OnboardingProcessProfile/> */}
                    <Outlet/>

                </div>

            </div>
        
        </>
    )
}