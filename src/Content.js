import React from 'react';
import Data from './Data';
import Link from './Link';
import './App.css';

export default function Content(props) {

    const dayContent = Data[`day_${props.day}`];

    if (dayContent){
        return (
            <div className={props.contentIsOpen ? "content open" : "content"}>
                <button className="closeButton material-icons close" onClick={() => props.openContent(false)} tabIndex="0">close</button>
                <div className="contentContainer">
                    <h2>{dayContent.title}</h2>
                    <p>{dayContent.text}</p>
                    <Link data={dayContent.link}/>
                </div>
            </div>
        );
    }
    return null;
}
