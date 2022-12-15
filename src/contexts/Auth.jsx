import React, { useState } from 'react'
import { useEffect } from 'react';
import { createContext, useContext } from "react";

const AuthContext = createContext({});

export const getAuthFromLocalStorage = () => {
    return JSON.parse(window.localStorage.getItem("auth")) || {}
}

export const setAuthToLocalStorage = (auth = {}) => {
    window.localStorage.setItem("auth", JSON.stringify(auth))
}

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(getAuthFromLocalStorage());

    const value = {
        auth,
        setAuth,
    }

    useEffect(() => {
        setAuthToLocalStorage(auth)
    }, [auth])

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)