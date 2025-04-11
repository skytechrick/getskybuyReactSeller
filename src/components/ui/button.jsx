
export function Button({ type , children , onClick , disabled = false}) {
    

    return (
        <button
            type={type}
            className="px-4 py-2 shadow-md transition-background duration-200 ease-in-out bg-gradient-to-r from-orange-400 to-red-400 text-white w-full p-2 rounded-md hover:bg-gradient-to-r hover:from-red-400 hover:to-orange-400 hover:underline hover:opacity-80 active:opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:bg-gradient-to-r disabled:from-gray-100 disabled:border disabled:border-gray-400 disabled:text-black disabled:to-gray-200"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}