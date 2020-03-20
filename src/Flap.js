import React from 'react';
import Data_EN from './Data';
import Data_FR from './Data-fr';
import './App.css';

function Flap(props) {

    let url = window.location !== window.parent.location ? document.referrer : document.location.href;
    let Data = url.includes("/fr/") ? Data_FR : Data_EN;

    const dayContent = Data[`day_${props.day}`];

    return (
        <a className="flap" tabIndex="1" data-day={props.day} href={dayContent.link} target="_blank">
            <p>{dayContent.theme}</p>
        </a>
    );
}

export default Flap;
