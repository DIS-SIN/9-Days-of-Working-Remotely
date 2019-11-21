import React, {useState} from 'react';
import Header from './Header';
import NoPeeking from './NoPeeking';
import Flap from './Flap';
import Content from './Content';
import './App.css';

function App() {

    const [contentIsOpen, openContent] = useState(false);
    const [error, setError] = useState({
        exists: false
    })

    const days = Array.from({length: 12}, (v, k) => k+1);

    return (
        <React.Fragment>
            <Header/>
            {error.exists ? <NoPeeking error={error} setError={setError}/> : null}
            <div className="calendar">
                {days.map(day => <Flap key={day} day={day} openContent={openContent} setError={setError}/>)}
                <Content contentIsOpen={contentIsOpen} openContent={openContent}/>
            </div>
        </React.Fragment>
    );
}

export default App;
