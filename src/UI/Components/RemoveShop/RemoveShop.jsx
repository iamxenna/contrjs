import React, {useContext} from 'react';
import Web3Service from "../../../Services/Web3Service/Web3Service";
import {Button, Form} from "react-bootstrap";
import {Context} from "../../../Context/ContextWrapper";

export const RemoveShop = () => {

    const { userData } = useContext(Context);

    const removeShopHandler = async (e) => {
        e.preventDefault();
        const { target } = e;
        const data = await Web3Service.removeMarket(target[0].value, userData.address);
        console.log(data);
    }

    return (
        <Form onSubmit={removeShopHandler} style={{width: "15rem", marginTop: "2rem"}}>
            <h5>Удаление магазина</h5>
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
