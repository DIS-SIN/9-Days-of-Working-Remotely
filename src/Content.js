import React from 'react';
import './App.css';

export default function Content(props) {

    return (
        <div className={props.contentIsOpen ? "content open" : "content"}>
            <button className="closeButton material-icons close" onClick={() => props.openContent(false)} tabIndex="0">close</button>
        </div>
    );
}
