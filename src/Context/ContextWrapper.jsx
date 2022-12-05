import {createContext, useState} from "react";

const Context = createContext({});

const ContextWrapper = ({children}) => {

    const initialUserData = {
        name: "",
        role: "",
        reviewsCount: "",
        address: ""
    }

    const [userData, setUserData] = useState(initialUserData);
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

    const logout = () => {
        setUserData(initialUserData);
    }

    const values = {
        userData,
        setUserData,
        login,
        marketData,
        marketsData,
        getMarket,
        getMarkets,
        logout
    }

    return <Context.Provider value={values}>
        {children}
    </Context.Provider>

}

export {
    Context
}

export default ContextWrapper;
