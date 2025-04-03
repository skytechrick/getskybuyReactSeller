

export function InputField({ id, placeholder, type = "text" , setValue, value }) {
    return (
        <div className="relative my-[8px] w-full">
            <input
                id={id}
                type={type}
                value={value}
                style={{
                    border: "1px solid var(--secondaryColor)"
                }}
                onFocus={(e) => {
                    e.target.style.border = "2px solid var(--secondaryColor)"
                }}
                onBlur={(e) => {
                    e.target.style.border = "1px solid var(--primaryColor)"
                }}
                onChange={(e) => setValue(e.target.value)}
                placeholder=" "
                className="peer text-sm outline-none border w-full px-4 py-3 rounded-md transition-shadow duration-200 focus:shadow focus:shadow-[var(--primaryColor)]"
                required
            />
            <label
                htmlFor={id}
                className= {`absolute left-[13px] top-3 text-sm text-gray-500 transition-all 
                   peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 
                   peer-focus:-top-[6px] peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-gray-700 
                   peer-valid:-top-[6px] peer-valid:text-xs peer-valid:bg-white peer-valid:px-1 peer-valid:text-gray-700`}
            >
                {placeholder}
            </label>
        </div>

    )
}

export function InputFieldPassword({ id, placeholder, type = "text" , setValue, value }) {
    return (
        <div className="relative my-[8px] w-full">
            <input
                id={id}
                type={type}
                value={value}
                style={{
                    border: "1px solid var(--secondaryColor)"
                }}
                onFocus={(e) => {
                    e.target.style.border = "2px solid var(--secondaryColor)"
                }}
                onBlur={(e) => {
                    e.target.style.border = "1px solid var(--primaryColor)"
                }}
                onChange={(e) => setValue(e.target.value)}
                placeholder=" "
                className="peer text-sm outline-none border w-full px-4 py-3 rounded-md transition-shadow duration-200 focus:shadow focus:shadow-[var(--primaryColor)]"
                required
            />
            <label
                htmlFor={id}
                className= {`absolute left-[13px] top-3 text-sm text-gray-500 transition-all 
                   peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 
                   peer-focus:-top-[6px] peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-gray-700 
                   peer-valid:-top-[6px] peer-valid:text-xs peer-valid:bg-white peer-valid:px-1 peer-valid:text-gray-700`}
            >
                {placeholder}
            </label>
        </div>

    )
}