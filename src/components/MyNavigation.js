import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink activeStyle={{color:"green"}} to="/">Home</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default MyNavigation;