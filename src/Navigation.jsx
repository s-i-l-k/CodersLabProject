import React from 'react';
import { NavLink } from "react-router-dom";

const activeStyle = {
    backgroundColor: "pink",
}

const Navigation = () => {
    return <ul>
            <li key="main"><NavLink exact to="/" activeStyle={activeStyle}>Strona główna</NavLink></li>
            <li key="hello-jan"><NavLink to="/hello/Jan" activeStyle={activeStyle}>Hello Jan</NavLink></li>
            <li key="hello-iga"><NavLink to="/hello/Iga" activeStyle={activeStyle}>Hello Iga</NavLink></li>
            <li key="checkage-11"><NavLink to="/checkage/11" activeStyle={activeStyle}>Sprawdź wiek: 11</NavLink></li>
            <li key="checkage-20"><NavLink to="/checkage/20" activeStyle={activeStyle}>Sprawdź wiek: 20</NavLink></li>
        </ul>

};

export default Navigation;