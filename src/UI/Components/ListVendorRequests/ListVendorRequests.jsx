import React, {useEffect, useState} from 'react';
import {ListGroup} from "react-bootstrap";
import Web3Service from "../../../Services/Web3Service/Web3Service";

export const ListVendorRequests = ({address}) => {

    const [localData, setLocalData] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await Web3Service.listVendorRequests(address);
            setLocalData(data);
        })()
    }, [])


    return (
        <div style={{marginTop: "2rem"}}>
            <h5>Vendors Requests</h5>
            {localData?.map((el, idx) => (
                <div key={idx}>
                    <ListGroup>
                        <ListGroup.Item>
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Address</div>
                                {el.sender}
                            </div>
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Market</div>
                                {el.market}
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            ))}
        </div>
    )
};
