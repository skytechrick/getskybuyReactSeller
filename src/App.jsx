import LoginPage from './components/login.jsx';
import HomeHeader from './components/homeHeader.jsx';
import HomePage from './components/homePage.jsx';
import Onboarder from './components/onboarding.jsx';
import HomePageSection7 from "./components/homePageSection7.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            {/* <div className='flex flex-col'></div> */}
            <Route path="/" element={<HomePage />} />
                
            <Route path="/auth">
                <Route path="login" element={<><HomeHeader/><LoginPage /> <HomePageSection7/></>} />
            </Route>

            {/* <Route path="/onboarding"> */}

                {/* <Route path="login" element={<><HomeHeader/><LoginPage /></>} /> */}

            {/* </Route> */}

            <Route path="*" element={<h1 className='text-3xl'>Page not found</h1>} />
        </Routes>
        
    );
}


export default App;