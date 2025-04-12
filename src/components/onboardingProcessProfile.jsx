import { Button } from "./ui/button.jsx";
import { InputField , InputOptionField , InputFileField } from "./ui/inputField.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sellerBackendImage } from "../utils/sellerBackendImage.js";
import { formateDateToInputDate } from "../utils/date.js";

export default function OnboardingProcessProfile() {

    const [imageUrl, setImageUrl] = useState(null);

    const [isUpdate, setIsUpdate] = useState(1);

    const [uploadImage, setUploadImage] = useState(null);
    // onboarder?.profileImage
    const genderOptions = [
        {
            value: "male",
            label: "Male"
        },
        {
            value: "female",
            label: "Female"
        },
        {
            value: "other",
            label: "Other"
        }
    ];

    const [newSeller, setNewSeller] = useState({
        name: "",
        mobileNumber: "",
        altMobileNumber: "",
        dob: "1947-08-15",
        gender: "---- Select gender ----",
        address: {
            address_line:"",
            pinCode: "",
            district: "",
            state: "",
            city: "",
            country: ""
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewSeller(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setNewSeller(prev => ({
            ...prev,
            address: {
                ...prev.address,
                [name]: value
            }
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploadImage(file);
            setImageUrl(URL.createObjectURL(file));
        }
    };

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
                    setImageUrl(sellerBackendImage(data.data.profileImage));

                    setNewSeller({
                        name: data.data.personalDetails.name,
                        mobileNumber: data.data.personalDetails.mobileNumber,
                        altMobileNumber: data.data.personalDetails.altMobileNumber || "",
                        dob: data.data.personalDetails.dob? formateDateToInputDate(new Date(data.data.personalDetails.dob)) : "1947-08-15",
                        gender: data.data.personalDetails.gender || "---- Select gender ----",
                        address: data.data.address && {
                            address_line: data.data.address.address_line || "",
                            pinCode: data.data.address.pinCode.toString() || "",
                            district: data.data.address.district || "",
                            state: data.data.address.state || "",
                            city: data.data.address.city || "",
                            country: data.data.address.country || "",
                        }
                    })
                    
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
    }, [isUpdate]);

    const submitHandle = async (e) => {
        e.preventDefault();
        const upload = newSeller;
        
        const formData = new FormData();
        formData.append("name", upload.name);
        formData.append("mobileNumber", upload.mobileNumber);
        formData.append("altMobileNumber", upload.altMobileNumber);
        formData.append("dob", upload.dob);
        formData.append("gender", upload.gender);

        const stringAddress = JSON.stringify(upload.address);

        formData.append("address", stringAddress);
        if (uploadImage) {
            formData.append("profileImage", uploadImage);
        }

        const token = localStorage.getItem("onboardAccessToken");
        

        try {

            const response = await fetch(`${url}/api/onboarding/process/profile-completion`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData
            })

            const data = await response.json();
            if(response.ok) {
                alert(data.message);
                setIsUpdate(isUpdate + 1);
            } else {
                alert(data.message);
            }

        } catch (error) {
            console.log("Error fetching data:", error);
            alert("Something went wrong, please login again");
        }

    }
    

    return (
        <div>

            <div className="w-4/5 my-4 mx-auto">
                <h2 className="text-lg font-semibold">Step 1: Profile - First step</h2>
                <p className="text-sm text-gray-500">Hello, {onboarder?.personalDetails.name || "Guest"} | Complete your profile information</p>

                <div className="mt-4">
                    {
                        onboarder && (
                            <form onSubmit={submitHandle}>
                                <fieldset className="border-2 border-gray-300 p-4 rounded-md">
                                    <legend>Personal Details</legend>
                                    <InputField
                                        onChange={handleChange}
                                        id="name"
                                        value={newSeller.name}
                                        required={true}
                                        placeholder="Name"
                                        autoFocus={true} 
                                        type="text"
                                    />
                                        

                                    <div className="flex flex-row gap-4">

                                        <InputField
                                            onChange={handleChange}
                                            id="mobileNumber"
                                            value={newSeller.mobileNumber}
                                            required={true}
                                            placeholder="Mobile number"
                                            type="text"
                                            max={10}
                                        />

                                        <InputField 
                                            onChange={handleChange}
                                            id="altMobileNumber"
                                            value={newSeller.altMobileNumber}
                                            required={true}
                                            placeholder="Alt. number"
                                            type="text"
                                            max={10}
                                        />

                                    </div>

                                    <div className="flex flex-row gap-4">
                                        

                                        <InputField 
                                            onChange={handleChange}
                                            id="dob"
                                            value={newSeller.dob}
                                            required={true}
                                            placeholder="D.O.B"
                                            type="date"
                                        />
                                        <InputOptionField 
                                            onChange={handleChange}
                                            options={genderOptions}
                                            id="gender"
                                            value={newSeller.gender}
                                            required={true}
                                            placeholder="Gender"
                                            
                                        />
                                    </div>

                                    <div>
                                                
                                        <InputFileField 
                                            onChange={handleImageChange}
                                            id="profileImage"
                                            required={false}
                                            placeholder="Profile image"
                                            url={imageUrl}
                                            setImageUrl={setImageUrl}
                                            imageDescription={"Profile image"}
                                        />
                                    </div>

                                </fieldset>

                                <fieldset className="border-2 border-gray-300 p-4 rounded-md mt-4 mb-3">
                                    <legend>Address</legend>
                                    


                                    <div className="flex flex-row gap-4">
                                        

                                        <InputField 
                                            onChange={handleAddressChange}
                                            id="address_line"
                                            value={newSeller.address?.address_line}
                                            required={true}
                                            placeholder="Address line"  
                                        />

                                        <InputField 
                                            onChange={handleAddressChange}
                                            id="pinCode"
                                            value={newSeller.address?.pinCode}
                                            required={true}
                                            placeholder="PIN Code"
                                            max={6}
                                        />

                                    </div>
                                    <div className="flex flex-row gap-4">
                                        

                                        <InputField 
                                            onChange={handleAddressChange}
                                            id="district"
                                            value={newSeller.address?.district}
                                            required={true}
                                            placeholder="District"  
                                        />

                                        <InputField 
                                            onChange={handleAddressChange}
                                            id="city"
                                            value={newSeller.address?.city}
                                            required={true}
                                            placeholder="City"  
                                        />

                                    </div>
                                    <div className="flex flex-row gap-4">
                                        

                                        <InputField 
                                            onChange={handleAddressChange}
                                            id="state"
                                            value={newSeller.address?.state}
                                            required={true}
                                            placeholder="State"  
                                        />

                                        <InputField 
                                            onChange={handleAddressChange}
                                            id="country"
                                            value={newSeller.address?.country}
                                            required={true}
                                            placeholder="Country"  
                                        />

                                    </div>


                                </fieldset>

                                <Button type="submit" children={"Update"} disabled={false}/>
                            </form>
                        )
                    }
                    <div>
                        <div className="flex flex-row justify-end gap-4 my-4">
                            <div className="w-24">
                                <Button onClick={()=>{navigate("/onboarding/process/business")}} type="button" children={"Next"} disabled={onboarder?.process.profileCompletion?false:true}/>
                            </div>
                            
                        </div>

                        <hr />
                        <p className="text-sm text-gray-500 mt-4">Note: Please make sure to fill all the required fields before submitting.</p>
                        <p className="text-sm text-gray-500">You can update your profile later as well.</p>
                        <p className="text-sm text-gray-500">If you have any questions, please contact us.</p>
                    </div>
                </div>
                
            </div>

        </div>
    )
}