import React from "react";
import { Link } from "react-router-dom";

const links = [
    {
    name: 'Login',
    href: '/Login',},
    {
        name: 'Animales',
        href: '/Animales',},
    {
        name: 'Donar',
        href: '/Donar',},
    {
        name: 'Registro',
        href: '/Registro',},
]

const NavBar = () => {
    return <div>
        {
            links.map(x =>(
                <Link to={x.href}>{x.name}</Link>
            ))
        }
    </div>;
};

export default NavBar