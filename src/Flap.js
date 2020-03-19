import React from 'react';
import Data_EN from './Data';
import Data_FR from './Data-fr';
import './App.css';

function Flap(props) {

    let url = window.location !== window.parent.location ? document.referrer : document.location.href;
    let Data = url.includes("/fr/") ? Data_FR : Data_EN;

    const dayContent = Data[`day_${props.day}`];

    function open(ev) {
        if (checkDate()){
            console.log("Opening Day ", ev.target.getAttribute("data-day"));
            props.setDayToOpen(props.day);
            props.openContent(true);
        }
        else {
            props.setError({
                exists: true,
                message: dayContent.error_message
            });
        }
    }

    function checkDate() {
        // return new Date("December 5, 2019") >= new Date(dayContent.unlocks_at);
        return Date.now() >= new Date(dayContent.unlocks_at);
    }

    return (
        <div className="flap" data-day={props.day} onClick={open} tabIndex="1">
            <p>{dayContent.theme}</p>
        </div>
    );
}

export default Flap;
