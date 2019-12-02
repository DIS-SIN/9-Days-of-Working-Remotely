import React from 'react';
import Data from './Data';
import { ReactTinyLink } from 'react-tiny-link'
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
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url={dayContent.link}
                    />
                </div>
            </div>
        );
    }
    return null;
}
