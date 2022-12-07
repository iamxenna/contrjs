import React, {useEffect, useState} from 'react';
import {ListGroup} from "react-bootstrap";
import Web3Service from "../../../Services/Web3Service/Web3Service";

export const ListCustomerRequests = ({address}) => {

    const [localData, setLocalData] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await Web3Service.listCustomerRequests(address);
            setLocalData(data);
        })()
    })

    return (
        <div style={{marginTop: "2rem"}}>
            <h5>Customers Requests</h5>
            {localData?.map((el, idx) => (
                <div key={idx}>
                    <ListGroup>
                        <ListGroup.Item>{el}</ListGroup.Item>
                    </ListGroup>
                </div>
            ))}
        </div>
    )
};
