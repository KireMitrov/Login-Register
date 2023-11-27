import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [showLogin, setShowLogin] = useState(true);

    const value = { showLogin, setShowLogin }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider }