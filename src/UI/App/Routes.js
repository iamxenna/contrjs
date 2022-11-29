import React from "react";
import Registration from "../Pages/Registration";
import Auth from "../Pages/Auth";
import Home from "../Pages/Home";

export const Routes = [
    {
        path: "/home",
        page: <Home/>
    },
    {
        path: "/registration",
        page: <Registration/>
    },
    {
        path: "/login",
        page: <Auth/>
    }
]