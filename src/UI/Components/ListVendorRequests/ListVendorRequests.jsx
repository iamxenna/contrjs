import React, {useState} from 'react';
import {Button, Form, ListGroup} from "react-bootstrap";
import Web3Service from "../../../Services/Web3Service/Web3Service";

export const ListVendorRequests = () => {

    const [localData, setLocalData] = useState([]);

    const checkListHandler = async (e) => {
        e.preventDefault();
        const { target } = e;
        const data = await Web3Service.listVendorRequests(target[0].value);
        setLocalData(data);
    }

    return (
        <>
            <Form onSubmit={checkListHandler} style={{width: "15rem", marginTop: "2rem"}}>
                <h5>Request Customer</h5>

                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" />
                </Form.Group>

                <Button type="submit">
                    Submit
                </Button>
            </Form>

            <div style={{marginTop: "2rem"}}>
                {localData.map((el, idx) => (
                    <div key={idx}>
                        <ListGroup>
                            <ListGroup.Item>{el}</ListGroup.Item>
                        </ListGroup>
                    </div>
                ))}
            </div>
        </>
    )
};
