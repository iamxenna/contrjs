import React, {useContext} from 'react';
import Web3Service from "../../../Services/Web3Service/Web3Service";
import {Button, Form} from "react-bootstrap";
import {Context} from "../../../Context/ContextWrapper";

export const GetMarket = () => {

    const { getMarket } = useContext(Context);

    const getMarketHandler = async (e) => {
        e.preventDefault();
        const { target } = e;
        const data = await Web3Service.getMarket(target[0].value);
        getMarket(data);
    }

    return (
        <Form onSubmit={getMarketHandler} style={{width: "15rem", marginTop: "2rem"}}>

            <h5>Get Market</h5>
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
