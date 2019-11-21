import React from 'react';
import './App.css';

export default function Content(props) {

    return (
        <div className={props.contentIsOpen ? "content open" : "content"}>
            <button className="closeButton" onClick={() => props.openContent(false)}>Close</button>
        </div>
    );
}
