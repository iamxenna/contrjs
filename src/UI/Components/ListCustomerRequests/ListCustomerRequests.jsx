import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, ListGroup} from "react-bootstrap";
import Web3Service from "../../../Services/Web3Service/Web3Service";
import {Context} from "../../../Context/ContextWrapper";

export const ListCustomerRequests = () => {

    const [localData, setLocalData] = useState([]);

    const { userData } = useContext(Context);

    useEffect(() => {
        (async () => {
            const data = await Web3Service.listCustomerRequests(userData.address);
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
