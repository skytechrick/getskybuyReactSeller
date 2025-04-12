import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button.jsx";
import { InputField , InputOptionField , InputFileField } from "./ui/inputField.jsx";
import { sellerBusinessBackendImage } from "../utils/sellerBackendImage.js"

export default function OnboardingProcessBusiness(){

    const busnessTypes = [
        { 
            value: "sole-proprietorship",
            label: "Sole Proprietorship" 
        },
        { 
            value: "partnership",
            label: "Partnership" 
        },
        { 
            value: "llp",
            label: "Limited Liability Partnership (LLP)" 
        },
        { 
            value: "private-limited",
            label: "Private Limited Company" 
        },
        { 
            value: "public-limited",
            label: "Public Limited Company" 
        },
        { 
            value: "one-person-company",
            label: "One Person Company (OPC)" 
        },
        {
            value: "trust",
            label: "Trust" 
        },
        { 
            value: "society",
            label: "Society" 
        },
        {
            value: "individual",
            label: "Individual"
        },
        {
            value: "small-shop",
            label: "Local shop"
        },
        {
            value: "other",
            label: "Other"
        }
        
    ];

    const [businessInformation, setBusinessInformation] = useState({
        name: "",
        type: "",
        gstin: "",
        description: "",
        panCard: "",
        aadhaarCard: "",
        businessMobileNumber: "",
        categories: "",
        address: {
            address_line:"",
            pinCode: "",
            district: "",
            state: "",
            city: "",
            country: ""
        },
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBusinessInformation(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setBusinessInformation(prev => ({
            ...prev,
            address: {
                ...prev.address,
                [name]: value
            }
        }));
    };

    const [panImage, setPanImage] = useState(null);
    const [panImageUrl, setPanImageUrl] = useState(null);

    const handlePanImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPanImage(file);
            setPanImageUrl(URL.createObjectURL(file));
        }
    };
    const [aadhaarImage, setAadhaarImage] = useState(null);
    const [aadhaarImageUrl, setAadhaarImageUrl] = useState(null);

    const handleAadhaarImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAadhaarImage(file);
            setAadhaarImageUrl(URL.createObjectURL(file));
        }
    };
    const [businessLogoImage, setBusinessLogoImage] = useState(null);
    const [businessLogoImageUrl, setBusinessLogoImageUrl] = useState(null);

    const handleBusinessLogoImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBusinessLogoImage(file);
            setBusinessLogoImageUrl(URL.createObjectURL(file));
        }
    };

    const [shopImage, setShopImageImage] = useState(null);
    const [shopImageImageUrl, setShopImageImageUrl] = useState(null);

    const handleShopImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setShopImageImage(file);
            setShopImageImageUrl(URL.createObjectURL(file));
        }
    };



    const [onboarder, setOnboarder] = useState(null)

    const navigate = useNavigate();
    
    const url = import.meta.env.VITE_SELLER_BACKEND;
    
    const [isBusinessUpdate, setIsBusinessUpdate] = useState(1);

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

                    setBusinessInformation({
                        name: data.data.businessInfo.name || "",
                        type: data.data.businessInfo.type || "---- Select Type ----",
                        gstin: data.data.businessInfo.gstin || "",
                        description: data.data.businessInfo.description || "",
                        panCard: data.data.businessInfo.panCard || "",
                        aadhaarCard: data.data.businessInfo.aadhaarCard || "",
                        businessMobileNumber: data.data.businessInfo.businessMobileNumber || "",
                        categories: data.data.categories || "",
                        address: {
                            address_line: data.data.businessInfo.address?.address_line || "",
                            pinCode: data.data.businessInfo.address?.pinCode.toString() || "",
                            district: data.data.businessInfo.address?.district || "",
                            state: data.data.businessInfo.address?.state || "",
                            city: data.data.businessInfo.address?.city || "",
                            country: data.data.businessInfo.address?.country || ""
                        },
                    });

                    setPanImageUrl(sellerBusinessBackendImage(data.data.businessInfo?.panFile));
                    setAadhaarImageUrl(sellerBusinessBackendImage(data.data.businessInfo?.aadhaarFile));
                    setBusinessLogoImageUrl(sellerBusinessBackendImage(data.data.businessInfo?.businessLogo));
                    setShopImageImageUrl(sellerBusinessBackendImage(data.data.businessInfo?.shopPhoto));

                    
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
    }, [isBusinessUpdate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const token = localStorage.getItem("onboardAccessToken");
        const formData = new FormData();
        if(!shopImage){
            alert("Please upload Shop image");
            return;
        };
        if(!panImage){
            alert("Please upload PAN card image");
            return;
        };
        if(!aadhaarImage){
            alert("Please upload Aadhaar card image");
            return;
        };
        if(businessLogoImage){
            formData.append( "businessLogo" , businessLogoImage);
        }
        
        formData.append("panFile" , panImage);
        formData.append("aadhaarFile" , aadhaarImage);
        formData.append("shopPhoto", shopImage);
        formData.append("name", businessInformation.name);
        formData.append("type", businessInformation.type);

        businessInformation.gstin === "" ? null : formData.append("gstin", businessInformation.gstin);
        
        formData.append("description", businessInformation.description);
        formData.append("panCard", businessInformation.panCard);
        formData.append("aadhaarCard", businessInformation.aadhaarCard);
        formData.append("businessMobileNumber", businessInformation.businessMobileNumber);
        formData.append("categories", businessInformation.categories);
        formData.append("address", JSON.stringify(businessInformation.address));

        const url = import.meta.env.VITE_SELLER_BACKEND;

        try {
            
            const response = await fetch(`${url}/api/onboarding/process/business`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                setIsBusinessUpdate(prev => prev + 1);
                
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            alert("Something went wrong, please try again");
        }
    }

    return (
        <div>
        
            <div className="w-4/5 my-4 mx-auto">
                <h2 className="text-lg font-semibold">Step 2: Business -  About business</h2>
                <p className="text-sm text-gray-500">Hello, {onboarder?.personalDetails.name || "Guest"} | Complete your business profile</p>

                <form onSubmit={handleSubmit} className="mt-4">
                    {
                        onboarder && (
                            <div className="flex flex-col w-full">
                                <fieldset className="border-2 border-gray-300 p-4 rounded-md w-full">
                                    <legend>Business information</legend>

                                    <InputField
                                        onChange={handleChange}
                                        id="name"
                                        value={businessInformation.name}
                                        required={true}
                                        placeholder="Business name"
                                        autoFocus={true} 
                                        type="text"
                                    />

                                    <InputOptionField
                                        onChange={handleChange}
                                        id="type"
                                        value={businessInformation.type}
                                        required={true}
                                        placeholder="Business type"
                                        options={busnessTypes}
                                    />


                                    <InputField 
                                        onChange={handleChange}
                                        id="gstin"
                                        value={businessInformation.gstin}
                                        required={false}
                                        placeholder="GSTIN (Optional)"
                                        type="text"
                                    />

                                    <InputField
                                        onChange={handleChange}
                                        id="description"
                                        value={businessInformation.description}
                                        required={true}
                                        placeholder="Description"
                                        autoFocus={false} 
                                        type="text"
                                    />
                                    <InputField
                                        onChange={handleChange}
                                        id="panCard"
                                        value={businessInformation.panCard}
                                        required={true}
                                        placeholder="PAN Card"
                                        autoFocus={false} 
                                        type="text"
                                    />
                                    <InputField
                                        onChange={handleChange}
                                        id="aadhaarCard"
                                        value={businessInformation.aadhaarCard}
                                        required={true}
                                        placeholder="Aadhaar Card"
                                        autoFocus={false} 
                                        type="text"
                                    />
                                    
                                    <InputField
                                        onChange={handleChange}
                                        id="businessMobileNumber"
                                        value={businessInformation.businessMobileNumber}
                                        required={true}
                                        placeholder="Business mobile number"
                                        autoFocus={false} 
                                        type="text"
                                    />
                                    <InputField
                                        onChange={handleChange}
                                        id="categories"
                                        value={businessInformation.categories}
                                        required={true}
                                        placeholder="Categories"
                                        autoFocus={false} 
                                        type="text"
                                    />

                                        

                                </fieldset>

                                <fieldset className="border-2 border-gray-300 p-4 rounded-md w-full">
                                    <legend>Documents</legend>

                                    <InputFileField 
                                        onChange={handlePanImageChange}
                                        id="panCardImage"
                                        required={false}
                                        placeholder="Pan card image"
                                        
                                        url={panImageUrl}
                                        setImageUrl={setPanImageUrl}
                                        imageDescription={"Pan card image"}
                                    />
                                    <InputFileField 
                                        onChange={handleAadhaarImageChange}
                                        id="aadhaarCardImage"
                                        required={false}
                                        placeholder="Aadhaar card image"
                                        url={aadhaarImageUrl}
                                        setImageUrl={setAadhaarImageUrl}
                                        imageDescription={"Aadhaar card image"}
                                    />
                                    <InputFileField 
                                        onChange={handleShopImageChange}
                                        id="shopImage"
                                        required={false}
                                        placeholder="Shop image"
                                        url={shopImageImageUrl}
                                        setImageUrl={setShopImageImageUrl}
                                        imageDescription={"Shop image"}
                                    />
                                    <InputFileField 
                                        onChange={handleBusinessLogoImageChange}
                                        id="businessLogo"
                                        required={false}
                                        placeholder="Business logo (Optional)"
                                        url={businessLogoImageUrl}
                                        setImageUrl={setBusinessLogoImageUrl}
                                        imageDescription={"Business logo (Optional)"}
                                    />
                                </fieldset>


                                <fieldset className="border-2 border-gray-300 p-4 rounded-md mt-4 mb-3">
                                    <legend>Business Address</legend>
                                    


                                    <div className="flex flex-row gap-4">
                                        

                                        <InputField 
                                            onChange={handleAddressChange}
                                            id="address_line"
                                            value={businessInformation.address?.address_line}
                                            required={true}
                                            placeholder="Address line"  
                                        />

                                        <InputField 
                                            onChange={handleAddressChange}
                                            id="pinCode"
                                            value={businessInformation.address?.pinCode}
                                            required={true}
                                            placeholder="PIN Code"
                                            max={6}
                                        />

                                    </div>
                                    <div className="flex flex-row gap-4">
                                        

                                        <InputField 
                                            onChange={handleAddressChange}
                                            id="district"
                                            value={businessInformation.address?.district}
                                            required={true}
                                            placeholder="District"  
                                        />

                                        <InputField 
                                            onChange={handleAddressChange}
                                            id="city"
                                            value={businessInformation.address?.city}
                                            required={true}
                                            placeholder="City"  
                                        />

                                    </div>
                                    <div className="flex flex-row gap-4">
                                        

                                        <InputField 
                                            onChange={handleAddressChange}
                                            id="state"
                                            value={businessInformation.address?.state}
                                            required={true}
                                            placeholder="State"  
                                        />

                                        <InputField 
                                            onChange={handleAddressChange}
                                            id="country"
                                            value={businessInformation.address?.country}
                                            required={true}
                                            placeholder="Country"  
                                        />

                                    </div>


                                </fieldset>

                                <Button type="submit" children={"Update"} disabled={false}/>
                                


                            </div>
                            
                        )
                    }

                    <div>
                        <div className="flex flex-row justify-between gap-4 my-4">
                            <div className="w-24">
                                <Button onClick={()=>{navigate("/onboarding/process/profile")}} type="button" children={"Back"} disabled={false}/>
                            </div>
                            <div className="w-24">
                                <Button onClick={()=>{navigate("/onboarding/process/bank")}} type="button" children={"Next"} disabled={onboarder?.process.businessInformation?false:true}/>
                            </div>
                            
                        </div>

                        <hr />
                        <div className="flex flex-col gap-2 mt-4">
                            <p className="text-sm text-gray-500">Please provide information about your business.</p>
                        </div>
                        
                    </div>
                </form>
                
            </div>

        </div>
    )
}