import React, {useContext} from 'react';
import Web3Service from "../../../Services/Web3Service/Web3Service";
import {Button, Form} from "react-bootstrap";
import {Context} from "../../../Context/ContextWrapper";

export const AddShop = () => {

    const { userData } = useContext(Context);

    const addShopHandler = async (e) => {
        e.preventDefault();
        const { target } = e;
        const data = await Web3Service.addMarket(target[0].value, target[1].value, userData.address);
        console.log(data);
    }

    return (
        <Form onSubmit={addShopHandler} style={{width: "15rem", marginTop: "2rem"}}>
            <h5>Новый магазин</h5>
            <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter city"/>
            </Form.Group>

            <Button type="submit">
                Submit
            </Button>
        </Form>
    );
};
