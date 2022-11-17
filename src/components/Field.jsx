import React from 'react'

function Field({ label, errorMessage, ...rest }) {
    return (
        <div className="flex flex-col space-y-2">
            <label>{label}</label>
            <input
                type="text"
                name="email"
                placeholder="your@email"
                className="border border-gray-200 p-4 rounded-lg"
                {...rest}
            />
            {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
        </div>
    )
}

export default Field
