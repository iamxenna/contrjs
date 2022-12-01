import React from 'react';
import Web3Service from "../../../Services/Web3Service/Web3Service";
import {Button, Form} from "react-bootstrap";

export const NewRole = () => {

    const newUserRoleHandler = async (e) => {
        e.preventDefault();
        const { target } = e;
        const data = await Web3Service.setRole(target[0].value, target[1].value);
        console.log(data);
    }

    return (
        <Form onSubmit={newUserRoleHandler} style={{width: "15rem", marginTop: "2rem"}}>
            <h5>Повышение/Понижение</h5>
            <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>New Role</Form.Label>
                <Form.Control type="text" placeholder="Enter Role"/>
            </Form.Group>

            <Button type="submit">
                Submit
            </Button>
        </Form>
    );
};
