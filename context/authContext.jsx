import { createContext, useContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store"
import { useRouter } from "expo-router";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const router = useRouter()
    const [currentUser, setCurrentUser] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const checkAuth = async () => {
            const token = await SecureStore.getItemAsync("accessToken")
            console.log(token);
            if (token) {
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false)
            }
            setIsLoading(false)
            
        }

        checkAuth()

    }, [])

    const userLogin = async (values) => {
        setCurrentUser(values)
        console.log(values);
         

        // data example
        const user = {name: "Ade", email: "ade@gmail.com", accessToken: "12345"}
        await SecureStore.setItemAsync("accessToken", user.accessToken)
        setCurrentUser(user)
        setIsLoggedIn(true)
        router.replace("/")

    }

    const userLogout = async () => {
        await SecureStore.deleteItemAsync("accessToken");
        setCurrentUser(null);
        setIsLoggedIn(false);
        router.replace("/login")
    }


    return(
        <AuthContext.Provider value={{ userLogin, userLogout, currentUser, isLoggedIn, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context
}





