import { createContext, useState } from "react";
import Config from"../config"
export const AuthContext = createContext();


export const AuthProvider = ({children}) => {

    const userStorage = JSON.parse(localStorage.getItem("movieapp.user")) || {};

    // mi objeto usuario
    const [user, setUser]= useState(userStorage);
    // creamos la funcion de logueo
    const login = (username, pass) =>{
        const authUser = Config.authUsers.find((user) => {
            return user.username === username && user.pass == pass;
        });
        if(authUser !== undefined){
            setUser(authUser);
            localStorage.setItem("movieapp.user",JSON.stringify(authUser));
            return true;
        }
        return false;
    }

    const logOut = () =>{
        localStorage.removeItem("movieapp.user");
        setUser({});
        window.location.href= "/";
    }

    // Estoy verificando si esta autentificado
    const isAuth = () =>{
        return user.username ? true : false;
    }
return (
    <AuthContext.Provider value={{user, login, logOut, isAuth}}>
        {children}
    </AuthContext.Provider>
);
}