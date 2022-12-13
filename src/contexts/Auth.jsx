import React, { useState } from 'react'
import { createContext, useContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({});

    const value = {
        auth,
        setAuth,
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)