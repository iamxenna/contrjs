import {createContext, useState} from "react";


const Context = createContext({});

const ContextWrapper = ({children}) => {
    const [userData, setUserData] = useState({});

    const login = (data) => {
        setUserData(data);
        if (userData[1] == 1) {
            console.log("+");
        }
    }

    const values = {
        userData,
        login
    }

    return <Context.Provider value={values}>
        {children}
    </Context.Provider>

}

export {
    Context
}

export default ContextWrapper;