import React from 'react';
import Web3Service from "../../../Services/Web3Service/Web3Service";
import {Button, Form} from "react-bootstrap";

export const NewAdmin = () => {

    const newAdminHandler = async (e) => {
        e.preventDefault();
        const { target } = e;
        const data = await Web3Service.addAdmin(target[0].value);
        console.log(data);
    }

    return (
        <Form onSubmit={newAdminHandler} style={{width: "15rem", marginTop: "2rem"}}>
            <h5>Новый Администратор</h5>
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
