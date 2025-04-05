import gsbLogo from "../images/GSB-Full-Logo.webp";

export default () => {
    const headerStyle = {
        borderBottom: "1px solid var(--secondaryColor)",
        boxShadow: "0 1px 3px var(--primaryColor)",
    };

    const gsbH1 = {
        color: "var(--primaryColor)",
    };

    return (
        <header style={headerStyle} className="w-full flex justify-center items-center h-14 bg-white font-sans">
            <div className="w-4/5 flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <div className="w-60 flex justify-center items-center flex-column">

                        <div>
                            <img className="h-12 w-12" src={gsbLogo} alt="GSB logo" />
                        </div>
                        <div className="h-12 relative -top-[2px]">
                            <h1 className="font-bold text-3xl" style={gsbH1}>GET SKY BUY</h1>
                            <p className="text-blue-700 relative -top-1 font-left text-sm font-bold italic">Seamless selling<img className="h-4 w-4 inline-block" src={gsbLogo} alt="GSB logo" /></p>
                        </div>

                    </div>

                    <div>
                        <nav className="flex flex-row list-none">
                            <ul className="flex flex-row list-none">

                                <li className="group w-24 mx-1 h-min relative top-0 text-center rounded-lg p-2 bg-white-100 hover:bg-orange-300 transition-all duration-200 cursor-pointer">
                                    <span>Services</span>
                                    <ul className="w-[180px] hidden group-hover:block absolute top-10 border left-0 bg-white shadow-xl rounded-lg p-2 transition-all duration-200 ">
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Apply for seller</li>
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Business connect</li>
                                    </ul>
                                </li>

                                <li className="group w-24 mx-1 h-min relative top-0 text-center rounded-lg p-2 bg-white-100 hover:bg-orange-300 transition-all duration-200 cursor-pointer">
                                    <span>About us</span>
                                    <ul className="w-[180px] hidden group-hover:block absolute top-10 border left-0 bg-white shadow-xl rounded-lg p-2 transition-all duration-200 ">
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">About seller's platform</li>
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">About company</li>
                                    </ul>
                                </li>
                                <li className="group w-24 mx-1 h-min relative top-0 text-center rounded-lg p-2 bg-white-100 hover:bg-orange-300 transition-all duration-200 cursor-pointer">
                                    <span>Features</span>
                                    <ul className="w-[180px] hidden group-hover:block absolute top-10 border left-0 bg-white shadow-xl rounded-lg p-2 transition-all duration-200 ">
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Large market</li>
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Listing products</li>
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Seamless onboarding</li>
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Connect with WhatsApp</li>
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">24/7 Support</li>
                                    </ul>
                                </li>
                                <li className="group w-24 mx-1 h-min relative top-0 text-center rounded-lg p-2 bg-white-100 hover:bg-orange-300 transition-all duration-200 cursor-pointer">
                                    <span>Support</span>
                                    <ul className="w-[180px] hidden group-hover:block absolute top-10 border left-0 bg-white shadow-xl rounded-lg p-2 transition-all duration-200 ">
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">WhatsApp us</li>
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Help center</li>
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Mail us</li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="group w-24 mx-1 h-min relative top-0 text-center rounded-lg shadow-sm p-2 bg-white-100 bg-orange-300 hover:bg-white hover:border hover:underline active:bg-orange-200 transition-all duration-200 cursor-pointer">
                        <span>Register</span>    
                    </div>
                    <div className="group w-24 mx-1 h-min relative top-0 text-center rounded-lg p-2 bg-white-100 hover:bg-orange-300 transition-all duration-200 cursor-pointer">
                        <span>Login</span>
                        <ul className="w-[180px] hidden group-hover:block absolute top-10 border left-0 bg-white shadow-xl rounded-lg p-2 transition-all duration-200 ">
                            <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Seller's Login</li>
                            <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Onboarder's login</li>
                        </ul>
                    </div>
                </div>


            </div>
        </header>
    )

}