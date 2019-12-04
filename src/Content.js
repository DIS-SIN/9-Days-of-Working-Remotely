import React from 'react';
import Data_EN from './Data';
import Data_FR from './Data-fr';
import Link from './Link';
import './App.css';

export default function Content(props) {

    let url = window.location !== window.parent.location ? document.referrer : document.location.href;
    let Data = url.includes("/fr/") ? Data_FR : Data_EN;

    const dayContent = Data[`day_${props.day}`];

    if (dayContent){
        return (
            <React.Fragment>
                <div className={props.contentIsOpen ? "contentBackgroundCover" : "contentBackgroundCover hide"}></div>
                <div className={props.contentIsOpen ? "content open" : "content"}>
                    <button className="closeButton material-icons close" onClick={() => props.openContent(false)} tabIndex="0">close</button>
                    <div className="contentContainer">
                        <h2>{dayContent.title}</h2>
                        <p>{dayContent.text}</p>
                        <Link data={dayContent.link}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    return null;
}
