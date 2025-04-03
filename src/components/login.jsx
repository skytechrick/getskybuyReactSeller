import { InputField , InputFieldPassword } from "./ui/inputField.jsx";

export default function LoginPage() {

    return (
        <div className="md:w-full xl:w-4/5 mx-auto flex justify-center items-center mt-10">
            <div className="mx-3 w-full bg-gray-100 flex justify-center items-center rounded-xl shadow-lg overflow-hidden">
                <div className="h-[300px] w-2/5 bg-gradient-to-r from-orange-300 to-red-300 text-white flex justify-center items-center flex-col">
                <h2 className="font-bold text-2xl md:text-3xl">Welcome sellers</h2>

                    <p>Effortless selling starts here – Log in!</p>
                </div>
                <div className="w-3/5 bg-white p-10">
                    <h2 className="font-bold text-2xl">Login</h2>
                    <p>Enter your credentials!</p>
                    <InputField id="loginSellerEmail" placeholder="Email"/>
                    <InputFieldPassword id="loginSellerPassword" type="password" placeholder="Password"/>

                </div>
            </div>

        </div>
    )

}