import React, {useState, useEffect} from 'react';
import './App.css';

export default function NoPeeking(props) {

    const [classes, setClasses] = useState("noPeekingWindow hide");

    useEffect(() => {
        setClasses("noPeekingWindow");
    },[]);

    function close() {
        setClasses("noPeekingWindow hide");
        setTimeout(() => {
            props.setError({exists:false});
        }, 500);
    }

    return (
        <div className="noPeeking" onClick={close}>
            <div className={classes}>
                <div>
                    <h4>{props.error.message.title}</h4>
                    <i className="material-icons close" tabIndex="0" onClick={close}>close</i>
                </div>
                <p>{props.error.message.text}</p>
            </div>
        </div>
    );
}
