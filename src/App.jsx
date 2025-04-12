import LoginPage from './components/login.jsx';
import OnboardingLogin from './components/onboardingLogin.jsx';
import OnboardingRegister from './components/onboardingRegister.jsx';
import OnBoardingVerifyOtp from './components/onBoardingVerifyOtp.jsx';
import HomeHeader from './components/homeHeader.jsx';
import HomePage from './components/homePage.jsx';
import Onboarder from './components/onboarding.jsx';
import OnboardingProfile from './components/onboardingProfile.jsx';
import OnboardingProcess from "./components/onboardingProcess.jsx";
import OnboardingHome from './components/onboardingHome.jsx';
import HomePageSection7 from "./components/homePageSection7.jsx";
import OnboardingProcessProfile from "./components/onboardingProcessProfile.jsx";
import OnboardingProcessBusiness from "./components/onboardingProcessBusiness.jsx";
import OnboardingProcessBank from "./components/onboardingProcessBank.jsx";
import { Routes, Route } from "react-router-dom";

function App() {


    return (

        
        <Routes>
            {/* <div className='flex flex-col'></div> */}
            <Route path="/" element={<HomePage />} />
                
            <Route path="/auth">
                <Route path="login" element={<><HomeHeader/><LoginPage /> <HomePageSection7/></>} />
            </Route>

                {/* <Route path="register" element={<><HomeHeader/><OnboardingRegister /> <HomePageSection7/></>} /> */}
            <Route path="/onboarding" element={<Onboarder />}>

                <Route path="process" element={<><HomeHeader/> <OnboardingProcess /> <HomePageSection7 /></>} >
                    <Route path="profile" element={<OnboardingProcessProfile />} />
                    <Route path="business" element={<OnboardingProcessBusiness/>} />
                    <Route path="bank" element={<OnboardingProcessBank/>} />
                </Route>

                <Route path="" element={<OnboardingHome/>} />
                <Route path="login" element={<><HomeHeader/><OnboardingLogin /> <HomePageSection7/></>} />
                <Route path="register" element={<><HomeHeader/><OnboardingRegister /> <HomePageSection7/></>}>
                    <Route path="verify-otp" element={<OnBoardingVerifyOtp/>} />
                </Route>
                <Route path="profile" element={<><HomeHeader/><OnboardingProfile/></>} />

            </Route>

            <Route path="*" element={<h1 className='text-3xl'>Page not found</h1>} />
        </Routes>
        
    );
}


export default App;