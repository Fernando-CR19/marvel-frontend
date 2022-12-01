import { useState } from 'react';
import EyeIcon from "@heroicons/react/24/outline/EyeIcon"
import EyeSlashIcon from "@heroicons/react/24/outline/EyeSlashIcon";

export function Field({ label, type = "text", errorMessage, ...rest }) {

    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    if (type === "password") {
        return (
            <div className="flex flex-col space-y-2">
                <label>{label}</label>
                <div className='flex bg-white border border-gray-300 rounded-md mt-1 w-full overflow-hidden items-stretch relative'>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="email"
                        placeholder="your@email"
                        className="flex-1 px-2 py-3 text-sm mr-12 border-0"
                        {...rest}
                    />

                    <button
                        tabIndex={0}
                        type="text"
                        onClick={togglePassword}
                        className="text-gray-500 w-12 hover:bg-gray-200 focus:bg-gray-200 h-full flex items-center justify-center cursor-pointer absolute right-0"
                    >
                        {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
                    </button>
                </div>
                {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
            </div>
        )
    } else {
        return (
            <div className="flex flex-col space-y-2">
                <label>{label}</label>
                <div className='flex bg-white border border-gray-300 rounded-md mt-1 w-full overflow-hidden items-stretch relative'>
                    <input
                        type="text"
                        name="email"
                        placeholder="your@email"
                        className="flex-1 px-2 py-3 text-sm border-0"
                        {...rest}
                    />
                </div>
                {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
            </div>
        )
    }
}
