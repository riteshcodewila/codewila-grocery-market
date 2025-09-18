import React from "react";
import { createContext, use } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { user } from "react";
import { isSeller } from "react";
// import { error } from "react";
// import { setError } from "react";    


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    
    const value = {
        user,
        isSeller,
        // error,
        setUser,
        setIsSeller,
        // setError
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}