import gsbLogo from "../images/GSB-Full-Logo.webp";
import menu from "../images/menu.png";
import { Link } from "react-router-dom";

export default () => {
    const headerStyle = {
        borderBottom: "1px solid var(--secondaryColor)",
        boxShadow: "0 1px 3px var(--primaryColor)",
    };

    const gsbH1 = {
        color: "var(--primaryColor)",
    };

    // const navigate = useNavigate();
    // const handleLogin = () => {
    //     navigate("/onboarding/login");
    // };

    const accessToken = localStorage.getItem("accessToken") || null;
    const onboardAccessToken = localStorage.getItem("onboardAccessToken") || null;

    return (
        <header style={headerStyle} className="w-full flex justify-center items-center h-14 bg-white font-sans sticky top-0 z-50">
            <div className="w-[98%] sm:w-[90%] lg:w-4/5 flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <div className="w-60 flex justify-center items-center flex-column">

                        <Link to="/?src=logo">
                            <img className="h-12 w-12" src={gsbLogo} alt="GSB logo" />
                        </Link>
                        <Link to="/?src=gsb_text" className="h-12 relative -top-[2px]">
                            <h1 className="font-bold text-2xl sm:text-3xl" style={gsbH1}>GET SKY BUY</h1>
                            <p className="text-blue-700 relative -top-1 font-left text-sm font-bold italic">Seamless selling<img className="h-4 w-4 inline-block" src={gsbLogo} alt="GSB logo" /></p>
                        </Link>

                    </div>


                    <div className="text-sm lg:text-md absolute left-0 top-14 border shadow-sm bg-white w-full flex justify-center items-center lg:static lg:border-0 lg:shadow-none lg:bg-transparent lg:w-auto lg:block lg:justify-start lg:items-start">
                    {/* <div className="lg:absolute lg:left-0 lg:top-14 lg:border shadow-sm bg-white lg:w-full lg:flex lg:justify-center lg:items-center"> */}

                        <nav className="flex flex-row">
                            <div className="hidden">
                                <img src={menu} alt="Meanu" />
                            </div>
                            <ul className="flex flex-row list-none">

                                <li className="group w-18 mx-0 lg:mx-1 h-min relative top-0 text-center rounded-lg p-1 my-2 lg:p-2 bg-white-100 hover:bg-orange-300 transition-all duration-200 cursor-pointer">
                                    <span>Services</span>
                                    <ul className="w-[180px] hidden group-hover:block absolute top-9 border left-0 bg-white shadow-xl rounded-lg p-2 transition-all duration-200 ">
                                        <Link to="/onboarding/register" className="block p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Register for seller</Link>
                                        <Link to="/business-connect" className="block p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Business connect</Link>
                                    </ul>
                                </li>
                                <li className="group w-20 mx-0 lg:mx-1 h-min relative top-0 text-center rounded-lg p-1 my-2 lg:p-2 bg-white-100 hover:bg-orange-300 transition-all duration-200 cursor-pointer">
                                    <span>Features</span>
                                    <ul className="w-[180px] hidden group-hover:block absolute top-9 border left-0 bg-white shadow-xl rounded-lg p-2 transition-all duration-200 ">
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Large market</li>
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Listing products</li>
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Seamless onboarding</li>
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Connect with WhatsApp</li>
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">24/7 Support</li>
                                    </ul>
                                </li>
                                <li className="group w-20 mx-0 lg:mx-1 h-min relative top-0 text-center rounded-lg p-1 my-2 lg:p-2 bg-white-100 hover:bg-orange-300 transition-all duration-200 cursor-pointer">
                                    <span>Support</span>
                                    <ul className="w-[180px] hidden group-hover:block absolute top-9 border left-0 bg-white shadow-xl rounded-lg p-2 transition-all duration-200 ">
                                        <a href="https://wa.me/9332525641" target="__blank" className="block p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">WhatsApp us</a>
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Help center</li>
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">Mail us</li>
                                    </ul>
                                </li>
                                <li className="group w-20 mx-0 lg:mx-1 h-min relative top-0 text-center rounded-lg p-1 my-2 lg:p-2 bg-white-100 hover:bg-orange-300 transition-all duration-200 cursor-pointer">
                                    <span>About us</span>
                                    <ul className="w-[180px] hidden group-hover:block absolute top-9 border right-0 bg-white shadow-xl rounded-lg p-2 transition-all duration-200 ">
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">About seller's platform</li>
                                        <li className="p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">About company</li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="hidden sm:block group w-24 mx-0 lg:mx-1 h-min relative top-0 text-center rounded-lg shadow-sm p-1 my-2 lg:p-2 bg-white-100 bg-orange-300 hover:bg-white hover:border hover:underline active:bg-orange-200 transition-all duration-200 cursor-pointer">
                        <span>Register</span>    
                    </div>
                    <div className="group w-20 mx-0 lg:mx-1 h-min relative top-0 text-center rounded-lg p-1 my-2 lg:p-2 bg-white hover:bg-orange-300 transition-all duration-200 cursor-pointer">
                        <span>Login</span>
                        <div className="w-[180px] hidden group-hover:block absolute right-0 top-10 border bg-white shadow-xl rounded-lg p-2 transition-all duration-200 ">
                            <Link to={accessToken ? "/dashboard" : "/auth/login"} className="block p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">{accessToken? "Go to dashboard": "Seller's Login"}</Link>
                            <Link to={onboardAccessToken? "/onboarding" : "/onboarding/login"} className="block p-1 active:bg-gray-300 active:underline text-sm hover:bg-gray-200 rounded-md mb-1">{onboardAccessToken? "Check your status" : "Onboarder's login"}</Link>
                        </div>
                    </div>
                </div>


            </div>
        </header>
    )

}