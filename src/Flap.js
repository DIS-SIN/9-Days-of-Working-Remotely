import React from 'react';
import './App.css';

function Flap(props) {

    function open(ev) {
        if (checkDate()){
            console.log("Opening Day ", ev.target.getAttribute("data-day"));
            props.openContent(true);
        }
        else {
            props.setError({
                exists: true,
                day: 5 + props.day - 1
            });
        }
    }

    function checkDate() {
        return Date.now() >= new Date(`December ${5 + props.day - 1}, 2019`);
    }

    return (
        <div className="flap" data-day={props.day} onClick={open}>
            <p>{props.day}</p>
            <i className="material-icons lock">{checkDate() ? "lock_open" : "lock"}</i>
        </div>
    );
}

export default Flap;
