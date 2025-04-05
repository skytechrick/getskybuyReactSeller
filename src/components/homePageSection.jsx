import gsbLogo from "../images/GSB - Full-Txt.jpg";

export default () => {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 mb-20">
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="rounded-full bg-white w-36 md:w-64 overflow-hidden shadow-lg md:mb-0 mb-10 animate-slideInLeft">
                    <img src={gsbLogo} alt="GSB - Logo" className="w-full" />
                </div>
                <div className="ml-0 md:ml-10 text-white">
                    <h2 className="text-2xl text-center md:text-4xl font-bold underline animate-slideInRight">GET SKY BUY</h2>
                    <p className="italic text-center text-sm md:text-lg animate-slideInRight">Sell your products to a wider audience with 0 hassle.</p>
                    <p className="italic text-center text-sm md:text-lg animate-slideInRight">Trusted by 100+ local shopkeepers.</p>
                </div>

            </div>


        </section>
    )
}