import { createContext,useState,useEffect } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    user:null,
    email: null,
    login: () =>{},
    logout: () => {}
});

export const AuthProvider = ({children}) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(()=>{
        const storedIsLoggedIn = sessionStorage.getItem('isLoggedIn');
        return storedIsLoggedIn === 'true';
    });

    const [user,setUser] = useState(() => sessionStorage.getItem('userName') || null);
    const [email,setEmail] = useState(()=> sessionStorage.getItem('userEmail') || null);

    const login = (userData,callback) =>{
        setIsLoggedIn(true);
        setUser(userData.name);
        setEmail(userData.email);
        sessionStorage.setItem('userName',userData.name);
        sessionStorage.setItem('isLoggedIn',true);
        sessionStorage.setItem('userId',userData.name);
        sessionStorage.setItem('userEmail',userData.email);

        callback && callback();
    };

    const logout = () =>{
        setIsLoggedIn(false);
        setUser(null);
        setEmail(null);
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('userEmail');
    };

    return (
        <AuthContext.Provider value={{isLoggedIn, user, email, login, logout}}>
        {children}
        </AuthContext.Provider>
    );
};