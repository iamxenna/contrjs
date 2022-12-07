import React from 'react';
import {Button, Form} from "react-bootstrap";
import Web3Service from "../../../Services/Web3Service/Web3Service";

export const ApproveVendor = ({address}) => {

    const approveVendorHandler = async (e) => {
        e.preventDefault();
        const { target } = e;
        const data = await Web3Service.approveVendor(target[0].value, address);
        console.log(data);
    }

    return (
        <Form onSubmit={approveVendorHandler} style={{width: "15rem", marginTop: "2rem"}}>
            <h5>Approve Vendor</h5>
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
