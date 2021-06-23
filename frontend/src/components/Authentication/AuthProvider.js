import { useState, useEffect, createContext } from 'react'
import { useHistory } from "react-router-dom";
import { auth } from "./../Firebase";

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
const [user, setUser] = useState();
const history = useHistory();

useEffect(() => {
    auth.onAuthStateChanged((user) => {
        console.log(user)
        setUser(user);
    }); 
}, []);

const logout = () => {
    auth.signOut().then(() => {
        setUser(null)
   
    })
}

    return (
    <AuthContext.Provider value={{ user, logout }}>{children}</AuthContext.Provider>
    );
};





