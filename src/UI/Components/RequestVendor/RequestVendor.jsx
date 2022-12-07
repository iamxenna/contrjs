import React from 'react';
import Web3Service from "../../../Services/Web3Service/Web3Service";
import {Button, Form} from "react-bootstrap";

export const RequestVendor = ({address}) => {

    const requestSubmitHandler = async (e) => {
        e.preventDefault();
        const data = await Web3Service.requestVendor(address);
        console.log(data);
    }

    return (
        <Form onSubmit={requestSubmitHandler} style={{width: "15rem", marginTop: "2rem"}}>
            <h5>Request Vendor</h5>

            <Button type="submit">
                Submit
            </Button>
        </Form>
    );
};
