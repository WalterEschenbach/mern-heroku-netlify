import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext(null)

export const AuthProvider = ({ user, children }) => {
    const [currentUser, setCurrentUser] = useState(user);

    useEffect(() => {
        setCurrentUser(user)
    }, [user])

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext)