import React from 'react';
import Web3Service from "../../../Services/Web3Service/Web3Service";
import {Button, Form} from "react-bootstrap";

export const DemoteVendor = ({address}) => {

    const demoteVendorHandler = async (e) => {
        e.preventDefault();
        const { target } = e;
        const data = await Web3Service.demoteVendor(target[0].value, address);
        console.log(data);
    }

    return (
        <Form onSubmit={demoteVendorHandler} style={{width: "15rem", marginTop: "2rem"}}>
            <h5>Demote Vendor</h5>
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

