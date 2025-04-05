import LoginPage from './components/login.jsx';
import Header from './components/header.jsx';

function App() {
    return (
        <div className='w-screen h-screen flex flex-col overflow-hidden'>
            <Header />
            <LoginPage />
        </div>
        
    );
}


export default App;