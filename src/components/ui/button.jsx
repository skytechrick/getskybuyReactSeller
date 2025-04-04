
export function Button({ type , children , onClick }) {
    
    const style = {
        backgroundColor: "var(--primaryColor)",
        color: "white",
    }

    return (
        <button
            style={style}
            type={type}
            className="w-full rounded-md px-4 py-2 shadow-md transition-background duration-200 ease-in-out"
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--secondaryColor)"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--primaryColor)"}
            onMouseDown={(e) => e.currentTarget.style.backgroundColor = "var(--tertiaryColor)"}
            onMouseUp={(e) => e.currentTarget.style.backgroundColor = "var(--secondaryColor)"}
            onClick={onClick}
        >
            {children}
        </button>
    );
}