
import { FaTimes } from "react-icons/fa";

export function InputField({ onChange = (e) => setValue(e.target.value) , id, placeholder, max , type = "text" , setValue, value , required = undefined , autoFocus = false }) {
    return (
        <div className="relative my-2 w-full z-10">
            <input
                id={id}
                name={id}
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
                onChange={onChange}
                placeholder=" "
                className="peer z-10 text-sm outline-none border w-full px-4 py-3 rounded-md transition-shadow duration-200 focus:shadow focus:shadow-[var(--primaryColor)]"
                required={required}
                autoComplete="off"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck="false"
                autoFocus={autoFocus}
                maxLength={max}
            />
            <label
                htmlFor={id}
                className= {`absolute left-[13px] top-3 text-sm text-gray-500 transition-all z-10
                   peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 
                   peer-focus:-top-[6px] peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-gray-700 
                   peer-valid:-top-[6px] peer-valid:text-xs peer-valid:bg-white peer-valid:px-1 peer-valid:text-gray-700`}
            >
                {placeholder}
            </label>
        </div>

    )
}

export function InputOptionField({ onChange = (e) => setValue(e.target.value) , id , placeholder , setValue, value , required = false , options = [] }) {
    return (
        <div className="relative my-2 w-full z-10">
            <select
                id={id}
                name={id}
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
                onChange={onChange}
                placeholder=" "
                className="peer z-10 text-sm outline-none border w-full px-4 py-3 rounded-md transition-shadow duration-200 focus:shadow focus:shadow-[var(--primaryColor)]"
            >
                <option value={value}>{value[0].toUpperCase() + value.slice(1)}</option>
                {
                    options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))
                }

            </select>
            <label
                htmlFor={id}
                className= {`absolute left-[13px] top-3 text-sm text-gray-500 transition-all z-10
                   peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 
                   peer-focus:-top-[6px] peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-gray-700 
                   peer-valid:-top-[6px] peer-valid:text-xs peer-valid:bg-white peer-valid:px-1 peer-valid:text-gray-700`}
            >
                {placeholder}
            </label>
        </div>

    )
}


export function InputFileField({ imageDescription , setImageUrl , onChange = (e) => setValue(e.target.value) , id, placeholder, setValue, value , required = undefined , url }) {
    return (
        <>
            {!url && (
                <div className="relative my-2 w-full z-10">
                    <input
                        id={id}
                        name={id}
                        type={"file"}
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
                        onChange={onChange}
                        placeholder=" "
                        className="peer z-10 text-sm outline-none border w-full px-4 py-3 rounded-md transition-shadow duration-200 focus:shadow focus:shadow-[var(--primaryColor)]"
                        required={required}
                        autoComplete="off"
                        autoCapitalize="none"
                        autoCorrect="off"
                        spellCheck="false"
                    />
                    <label
                        htmlFor={id}
                        className= {`absolute left-[13px] top-3 text-sm text-gray-500 transition-all z-10
                        peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 
                        peer-focus:-top-[6px] peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-gray-700 
                        peer-valid:-top-[6px] peer-valid:text-xs peer-valid:bg-white peer-valid:px-1 peer-valid:text-gray-700`}
                    >
                        {placeholder}
                    </label>
                </div>
            )}

            {
                url && (
                    <div>

                    
                        <p className="text-md font-bold my-2 underline">{imageDescription}</p>
                        <div className="relative top-0 w-[330px] h-[330px] bg-gray-200 rounded-md flex justify-center items-center overflow-hidden my-2">
                            <img crossOrigin="anonymous" className="w-full " src={url} alt="Upload image" />
                            <button onClick={()=>setImageUrl(null)} className="absolute top-2 right-2 bg-orange-400 hover:opacity-90 transition-all duration-200 opacity-40 rounded-lg p-2 shadow-md">
                                <FaTimes className="text-black"/>
                            </button>
                        </div>
                        
                    </div>
                )
            }


        </>

    )
}
