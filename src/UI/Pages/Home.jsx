import React, {useContext} from 'react';
import {Context} from "../../Context/ContextWrapper";
import {NewAdmin} from "../Components/NewAdmin/NewAdmin";
import {NewRole} from "../Components/NewRole/NewRole";
import {AddShop} from "../Components/AddShop/AddShop";
import {RemoveShop} from "../Components/RemoveShop/RemoveShop";
import {GetMarket} from "../Components/GetMarket/GetMarket";
import {GetMarkets} from "../Components/GetMarkets/GetMarkets";
import {RequestCustomer} from "../Components/RequestCustomer/RequestCustomer";
import {RequestVendor} from "../Components/RequestVendor/RequestVendor";
import {ListCustomerRequests} from "../Components/ListCustomerRequests/ListCustomerRequests";
import {ListVendorRequests} from "../Components/ListVendorRequests/ListVendorRequests";

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
                            <ListVendorRequests/>
                        </div>
                    </>) : undefined
            }
            {
                userData.role === String(1) ?
                    (<>
                        <h1 className="text-center mt-3">{userData.name} | {"Customer"}</h1>
                        <div className="d-flex flex-row flex-wrap justify-content-between m-auto" style={{width: "60vw"}}>
                            <RequestVendor/>
                        </div>
                    </>) : undefined
            }
            {
                userData.role === String(2) ?
                    (<>
                        <h1 className="text-center mt-3">{userData.name} | {"Vendor"}</h1>
                        <div className="d-flex flex-row flex-wrap justify-content-between m-auto" style={{width: "60vw"}}>
                            <RequestCustomer/>
                            <ListCustomerRequests/>
                        </div>
                    </>) : undefined
            }

        </div>
    );
};

export default Home;
