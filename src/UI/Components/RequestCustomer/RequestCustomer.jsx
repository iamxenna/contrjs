import React from 'react';
import Web3Service from "../../../Services/Web3Service/Web3Service";
import {Button, Form} from "react-bootstrap";

export const RequestCustomer = ({address}) => {

    const requestSubmitHandler = async (e) => {
        e.preventDefault();
        const data = await Web3Service.requestCustomer(address);
        console.log(data);
    }

    return (
        <Form onSubmit={requestSubmitHandler} style={{width: "15rem", marginTop: "2rem"}}>
            <h5>Request Customer</h5>

            <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
            </Form.Group>

            <Button type="submit">
                Submit
            </Button>
        </Form>
    );
};
