import {createContext, useState} from "react";


const Context = createContext({});

const ContextWrapper = ({children}) => {
    const [userData, setUserData] = useState({});
    const [marketData, setMarketData] = useState({});
    const [marketsData, setMarketsData] = useState([]);

    const login = (data) => {
        setUserData(data);
    }

    const getMarket = (data) => {
        setMarketData(data);
    }

    const getMarkets = (data) => {
        setMarketsData(data);
    }

    const values = {
        userData,
        setUserData,
        login,
        marketData,
        marketsData,
        getMarket,
        getMarkets
    }

    return <Context.Provider value={values}>
        {children}
    </Context.Provider>

}

export {
    Context
}

export default ContextWrapper;
