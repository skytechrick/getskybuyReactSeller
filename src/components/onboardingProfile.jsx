import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck , FaEdit , FaPen , FaTimes } from 'react-icons/fa';
import { Button } from './ui/button.jsx';

export default function OnboardingProfile() {

    const [profileData , setProfileData] = useState(undefined);
    const [pickup, setPickup] = useState(false);
    const navigate = useNavigate();
    
    const url = import.meta.env.VITE_SELLER_BACKEND;

    const goToOnboarding = () => {
        navigate("/onboarding/process/profile");
    }
    
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
                    setProfileData(data.data);
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
        if (profileData?.pickupAddress) {
            setPickup(true);
        }

    }, []);

    return (
        profileData && (            
            <div className='w-4/5 mx-auto my-14'>
                <div className='flex flex-row flex-wrap items-start justify-center'>

                    <div className='w-96 bg-white p-10 m-2 rounded-lg shadow-md hover:scale-105 transition-all duration-200'>
                        <h2 className='text-2xl font-bold'>Personal Details</h2>
                        <div className='flex flex-col mt-2'>
                            <p className='text-md'><strong>Name: </strong>{profileData.personalDetails.name}</p>
                            <p className='text-md'><strong>Email: </strong>{profileData.email}</p>
                            <p className='text-md'><strong>Mobile number: </strong>+91 {profileData.personalDetails.mobileNumber}</p>
                            <p className='text-md'><strong>Alt. number: </strong>+91 {profileData.personalDetails.altMobileNumber?  profileData.personalDetails.altMobileNumber: <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                            <p className='text-md'><strong>D.O.B: </strong> {profileData.personalDetails.dob?  profileData.personalDetails.dob: <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                            <p className='text-md'><strong>Gender: </strong> {profileData.personalDetails.gender?  profileData.personalDetails.gender: <span className='font-bold italic text-gray-500'>"Not specified"</span>}</p>

                            <p className='text-center font-bold mt-3 text-green-600'>{profileData.process.profileCompletion? (<div><span>Completed</span><FaCheck className='pl-1 relative bottom-[2px] text-xl inline-block'/></div>): <span className='font-bold italic text-red-400'>"Not completed<FaTimes className='pl-1 relative bottom-[2px] text-xl inline-block'/>"</span>}</p>

                        </div>
                    </div>
                    <div className='w-96 bg-white p-10 m-2 rounded-lg shadow-md hover:scale-105 transition-all duration-200'>
                        <h2 className='text-2xl font-bold'>Business Details</h2>
                        <div className='flex flex-col mt-2'>
                            <p className='text-md'><strong>Business name: </strong>{profileData.businessInfo.name? profileData.businessInfo.name : <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                            <p className='text-md'><strong>Business type: </strong>{profileData.businessInfo.type? profileData.businessInfo.type : <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                            <p className='text-md'><strong>Mobile number: </strong>+91 {profileData.businessInfo.businessMobileNumber? profileData.businessInfo.businessMobileNumber : <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                            <p className='text-md'><strong>Description: </strong>{profileData.businessInfo.description? profileData.businessInfo.description : <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                            <p className='text-md'><strong>GSTIN (optional):</strong> {profileData.businessInfo.gstin?  profileData.businessInfo.gstin: <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                            <p className='text-md'><strong>PAN card:</strong> {profileData.businessInfo.panCard?  profileData.businessInfo.panCard: <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                            <p className='text-md'><strong>Aadhaar card:</strong> {profileData.businessInfo.aadhaarCard?  profileData.businessInfo.aadhaarCard: <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                            
                            <p className='text-center font-bold mt-3 text-green-600'>{profileData.process.businessInformation? (<div><span>Completed</span><FaCheck className='pl-1 relative bottom-[2px] text-xl inline-block'/></div>): <span className='font-bold italic text-red-400'>"Not completed<FaTimes className='pl-1 relative bottom-[2px] text-xl inline-block'/>"</span>}</p>

                        </div>
                    </div>
                    <div className='w-96 bg-white p-10 m-2 rounded-lg shadow-md hover:scale-105 transition-all duration-200'>
                        <h2 className='text-2xl font-bold'>Bank account</h2>
                        <div className='flex flex-col mt-2'>
                            <p className='text-md'><strong>Account holder: </strong>{profileData.bankAccount.accountHolderName? profileData.businessInfo.accountHolderName : <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                            <p className='text-md'><strong>Bank name: </strong>{profileData.bankAccount.bankName? profileData.businessInfo.bankName : <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                            <p className='text-md'><strong>Account number: </strong>{profileData.bankAccount.accountNumber? profileData.businessInfo.accountNumber : <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                            <p className='text-md'><strong>IFSC Code: </strong>{profileData.bankAccount.ifscCode? profileData.businessInfo.ifscCode : <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                            <p className='text-md'><strong>UPI ID/NO: </strong>{profileData.bankAccount.upi? profileData.businessInfo.upi : <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                            
                            <p className='text-center font-bold mt-3 text-green-600'>{profileData.process.bankDetailsUploaded? (<div><span>Completed</span><FaCheck className='pl-1 relative bottom-[2px] text-xl inline-block'/></div>): <span className='font-bold italic text-red-400'>"Not completed<FaTimes className='pl-1 relative bottom-[2px] text-xl inline-block'/>"</span>}</p>

                        </div>
                    </div>

                    <div className='w-96 bg-white p-10 m-2 rounded-lg shadow-md hover:scale-105 transition-all duration-200'>
                        <h2 className='text-2xl font-bold'>Pickup address</h2>

                        {
                            pickup? (
                                
                                <div className='flex flex-col mt-2'>
                                    <p className='text-md'><strong>Contact person name: </strong>{profileData.pickupAddress.contactPerson.name? profileData.pickupAddress.accountHolderName : <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                                    <p className='text-md'><strong>Contact person no: </strong>{profileData.pickupAddress.contactPerson.mobileNumber? profileData.pickupAddress.accountHolderName.mobileNumber : <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                                    <p className='text-md'><strong>Address line: </strong>{profileData.pickupAddress.address_line? profileData.pickupAddress.address_line : <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                                    <p className='text-md'><strong>PIN code: </strong>{profileData.pickupAddress.address_line? profileData.pickupAddress.pinCode : <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                                    <p className='text-md'><strong>District: </strong>{profileData.pickupAddress.district? profileData.pickupAddress.district : <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                                    <p className='text-md'><strong>City: </strong>{profileData.pickupAddress.city? profileData.pickupAddress.city : <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                                    <p className='text-md'><strong>State: </strong>{profileData.pickupAddress.state? profileData.pickupAddress.state : <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                                    <p className='text-md'><strong>Country: </strong>{profileData.pickupAddress.country? profileData.pickupAddress.country : <span className='font-bold italic text-gray-500'>"Not added"</span>}</p>
                                    
                                    <p className='text-center font-bold mt-3 text-green-600'>{profileData.process.bankDetailsUploaded? (<div><span>Completed</span><FaCheck className='pl-1 relative bottom-[2px] text-xl inline-block'/></div>): <span className='font-bold italic text-red-400'>"Not completed<FaTimes className='pl-1 relative bottom-[2px] text-xl inline-block'/>"</span>}</p>

                                </div>
                            ): (
                                <div className='font-bold italic text-center text-red-400'>"Not completed<FaTimes className='pl-1 relative bottom-[2px] text-xl inline-block'/>"</div>
                            )
                        }
                        
                    </div>


                </div>

                <div className='bg-white p-10 m-2 rounded-lg shadow-md hover:scale-105 transition-all duration-200'>
                    
                    <h1 className='font-bold text-xl'>Current Status</h1>
                    <p><strong>Status:</strong> <span className='italic text-green-600'>{profileData.status}</span></p>
                    <p><strong>Remark:</strong> <span className='italic text-gray-400'>{profileData.remark?profileData.remark:"No Remark"}</span></p>
                    <p><strong>Onboarding completed:</strong> <span className='italic text-gray-400'>{profileData.isCompletedOnboarding? (<div><span>Completed</span><FaCheck className='pl-1 relative bottom-[2px] text-xl inline-block'/></div>): <span className='font-bold italic text-red-400'>"Not completed<FaTimes className='pl-1 relative bottom-[2px] text-xl inline-block'/>"</span>}</span></p>
                    <p><strong>Onboarding completed By:</strong> <span className='italic text-gray-400'>{profileData.onboardingCompletedBy? (<div><span>{profileData.onboardingCompletedBy.personalDetails.name}</span><FaCheck className='pl-1 relative bottom-[2px] text-xl inline-block'/></div>): <span className='font-bold italic text-red-400'>"Not completed<FaTimes className='pl-1 relative bottom-[2px] text-xl inline-block'/>"</span>}</span></p>
                    <p><strong>Onboarding completed At:</strong> <span className='italic text-gray-400'>{profileData.onboardingCompletedBy? (<div><span>{profileData.onboardingCompletedAt.toISOString()}</span><FaCheck className='pl-1 relative bottom-[2px] text-xl inline-block'/></div>): <span className='font-bold italic text-red-400'>"Not completed<FaTimes className='pl-1 relative bottom-[2px] text-xl inline-block'/>"</span>}</span></p>
                    <p><strong>Categories:</strong> <span className='italic text-gray-400'>{profileData.onboardingCompletedBy? (<div><span>{profileData.categories.toString()}</span><FaCheck className='pl-1 relative bottom-[2px] text-xl inline-block'/></div>): <span className='font-bold italic text-red-400'>"Not completed<FaTimes className='pl-1 relative bottom-[2px] text-xl inline-block'/>"</span>}</span></p>
                    <p><strong>Selected Categories:</strong> <span className='italic text-gray-400'>{profileData.onboardingCompletedBy? (<div><span>{JSON.stringify(profileData.selectedCategories)}</span><FaCheck className='pl-1 relative bottom-[2px] text-xl inline-block'/></div>): <span className='font-bold italic text-red-400'>"Not completed<FaTimes className='pl-1 relative bottom-[2px] text-xl inline-block'/>"</span>}</span></p>
                    
                </div>
                      
                <div className='flex flex-row justify-center items-center my-5 w-full'>
                    <div className='w-64'>
                        <Button type="button" onClick={goToOnboarding} children={"Go to onboarding"}/>
                    </div>
                        

                </div>
            </div>
        )
    );
}