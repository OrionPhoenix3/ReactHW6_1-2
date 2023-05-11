import React from "react";
import {NavLink} from "react-router-dom";

let activeStyle = {
    color: "black"
};

const Header = () => {
    return (
        <ul>
            <li>
                <NavLink to="/custom" style={({isActive}) => isActive ? activeStyle : undefined}>
                    Custom Form
                </NavLink>
            </li>
            <li>
                <NavLink to="/formik" style={({isActive}) => isActive ? activeStyle : undefined}>
                    Formik Form
                </NavLink>
            </li>
            <li>
                <NavLink to="/react-hook" style={({isActive}) => isActive ? activeStyle : undefined}>
                    React Hook Form
                </NavLink>
            </li>
            <li>
                <NavLink to="/redux" style={({isActive}) => isActive ? activeStyle : undefined}>
                    Redux Films
                </NavLink>
            </li>
        </ul>
    )
}

export default Header