import {createContext, useState} from "react";


const Context = createContext({});

const ContextWrapper = ({children}) => {
    const [userData, setUserData] = useState({});
    const [marketData, setMarketData] = useState({});

    const login = (data) => {
        setUserData(data);
    }

    const getMarket = (data) => {
        setMarketData(data);
    }

    const values = {
        userData,
        setUserData,
        login,
        marketData,
        getMarket
    }

    return <Context.Provider value={values}>
        {children}
    </Context.Provider>

}

export {
    Context
}

export default ContextWrapper;