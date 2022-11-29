import React, {useContext} from 'react';
import {Context} from "../../Context/ContextWrapper";
import {Button, Container, Form} from "react-bootstrap";
import Web3Service from "../../Services/Web3Service/Web3Service";

const Home = () => {

    //0x3Dc5eaCBb57B4a935e186386152e408428A7e8eE - admin - pass 123 - word 123
    //0x3e4117F5e6eB699b2a012e3B0fAEaE37bb4AaBa4 - customer - pass 123 - word 123

    const { userData, getMarket, setMarketData } = useContext(Context);

    if (userData.role === String(5)) {

        const newUserRoleHandler = async (e) => {
            e.preventDefault();
            const { target } = e;
            const data = await Web3Service.setRole(target[0].value, target[1].value);
            console.log(data);
        }

        const newAdminHandler = async (e) => {
            e.preventDefault();
            const { target } = e;
            const data = await Web3Service.addAdmin(target[0].value);
            console.log(data);
        }

        const addShopHandler = async (e) => {
            e.preventDefault();
            const { target } = e;
            const data = await Web3Service.addMarket(target[0].value, target[1].value);
            console.log(data);
        }

        const getMarketHandler = async (e) => {
            e.preventDefault();
            const { target } = e;
            const data = await Web3Service.getMarket(target[0].value);
            getMarket(data);
        }

        const removeShopHandler = async (e) => {
            e.preventDefault();
            const { target } = e;
            await Web3Service.removeMarket(target[0].value);
            // setMarketData({});
        }

        return (
            <>
                <h1 className="mb-5 text-center mt-5">Пользователь: {userData.name}, Роль: {userData.role}, Количество отзывов: {userData[2]}</h1>
                <Container className="m-auto mt-5 d-flex justify-content-around">
                    <Form onSubmit={newUserRoleHandler} style={{maxWidth: "15rem"}}>
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

                    <Form onSubmit={newAdminHandler} style={{maxWidth: "15rem"}}>
                        <h5>Новый Администратор</h5>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Address" />
                        </Form.Group>

                        <Button type="submit">
                            Submit
                        </Button>
                    </Form>

                    <Form onSubmit={addShopHandler} style={{maxWidth: "15rem"}}>
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

                    <Form onSubmit={removeShopHandler} style={{maxWidth: "15rem"}}>
                        <h5>Удаление магазина</h5>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Address" />
                        </Form.Group>

                        <Button type="submit">
                            Submit
                        </Button>
                    </Form>

                    <Form onSubmit={getMarketHandler} style={{maxWidth: "15rem"}}>

                        <h5>Get Market</h5>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Address" />
                        </Form.Group>

                        <Button type="submit">
                            Submit
                        </Button>
                    </Form>

                </Container>
            </>
        )
    } else if (userData.role === String(1)) {
        return (
            <>
            </>
        )
    }
};

export default Home;