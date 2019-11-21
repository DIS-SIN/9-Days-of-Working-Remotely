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
                <h4>No Peeking!</h4>
                <p>{`Please come back on December ${props.error.day}th to view this content.`}</p>
            </div>
        </div>
    );
}
