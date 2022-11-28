import React from 'react';
import {Button, Form} from "react-bootstrap";
import Web3Service from "../../Services/Web3Service/Web3Service";

const Registration = () => {

    const registrationHandler = async (e) => {
        e.preventDefault();
        const { target } = e;
        const data = await Web3Service.registerUser(target[0].value, target[1].value, target[2].value, target[3].value);
        console.log(data);
    }

    return (
        <Form onSubmit={registrationHandler} style={{maxWidth: "15rem", margin: "0 auto", marginTop: "3rem"}}>
            <h1>Registration</h1>

            <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Word</Form.Label>
                <Form.Control type="text" placeholder="Enter Word" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Registration;