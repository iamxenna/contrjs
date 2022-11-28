import React from 'react';
import {Header} from "../Header/Header";
import {ModalWindow} from "../ModalWindow/ModalWindow";

export const Layout = ({children}) => {
    return (
        <div>
            <Header />
            {children}
            <ModalWindow/>
        </div>
    );
};
