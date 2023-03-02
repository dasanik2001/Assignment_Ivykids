import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { jwtLoginApi, userLoginApi, userRegisterApi } from "../restApis/userApis";






const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState();
    // const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    async function fetchUser() {
        let accessToken = JSON.parse(window.localStorage.getItem('accessToken'));

        console.log(window.localStorage.getItem('accessToken'))
        if (accessToken) {
            const u = await jwtLoginApi(accessToken)
            console.log('from auth context', u)
            setUser(u)
            navigate('/dashboard/default')
        }

        // setLoading(false);
    }

    async function userRegister(email, pass) {
        await userRegisterApi(email, pass).then((async (data) => {
            // console.log(data)
            if (data)
                return true
            else return false
            // setUser(data)
            // loginUserData = data

        }))

    }

    async function userLogin(email, pass) {
        let loginUserData
        // console.log(email)
        await userLoginApi(email, pass).then((async (data) => {
            console.log(data)
            setUser(data)
            loginUserData = data

        }))
        return loginUserData;
    }


    function logout() {
        window.localStorage.removeItem('accessToken')
        setUser(null)
    }
    function resetUser(u) {
        setUser(u);
    }
    useEffect(() => {

        console.log("Hi, Congratulation! you are inside the useeffect of userAuthContext.")
        fetchUser()
        console.log('done')


    }, []);
    // useEffect(() => {
    //     setInterval(() => setDateState(new Date()), 1000)
    // }, [])

    return (<userAuthContext.Provider value={{ user, setUser, resetUser, logout, userRegister, userLogin }}>{children}</userAuthContext.Provider>);
}

export function useUserAuth() {
    // console.log("RESULT", userAuthContext);
    return useContext(userAuthContext);
}