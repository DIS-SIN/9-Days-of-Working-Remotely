import React from 'react';
import './App.css';

export default function Header() {

    return (
        <div className="header">
            <img src={require("./images/Bus Rides Publication Icon.png")} alt="Busrides Logo"/>
            <h3>12 Days of Data</h3>
        </div>
    );
}
