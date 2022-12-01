import React, {useContext} from 'react';
import {Context} from "../../Context/ContextWrapper";
import {NewAdmin} from "../Components/NewAdmin/NewAdmin";
import {NewRole} from "../Components/NewRole/NewRole";
import {AddShop} from "../Components/AddShop/AddShop";
import {RemoveShop} from "../Components/RemoveShop/RemoveShop";
import {GetMarket} from "../Components/GetMarket/GetMarket";
import {GetMarkets} from "../Components/GetMarkets/GetMarkets";

const Home = () => {

    const { userData } = useContext(Context);

    return (
        <div>
            {
                userData.role === String(5) ?
                    (<>
                        <h1 className="text-center mt-3">{userData.name} | {"Admin"}</h1>
                        <div className="d-flex flex-row flex-wrap justify-content-between m-auto" style={{width: "60vw"}}>
                            <NewRole/>
                            <NewAdmin/>
                            <AddShop/>
                            <RemoveShop/>
                            <GetMarket/>
                            <GetMarkets/>
                        </div>
                    </>) : undefined
            }
            {
                userData.role === String(1) ?
                    (<>
                        <h1>im user</h1>
                    </>) : undefined
            }

        </div>
    );
};

export default Home;
