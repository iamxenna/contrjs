import React from "react";
import Registration from "../Pages/Registration";
import Auth from "../Pages/Auth";

export const Routes = [
    {
        path: "/registration",
        page: <Registration/>
    },
    {
        path: "/login",
        page: <Auth/>
    }
]