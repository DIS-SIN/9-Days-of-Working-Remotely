import React, {useState} from 'react';
import NoPeeking from './NoPeeking';
import Flap from './Flap';
import Content from './Content';
import './App.css';

function App() {

    const [dayToOpen, setDayToOpen] = useState(null);
    const [contentIsOpen, openContent] = useState(false);
    const [error, setError] = useState({
        exists: false
    })

    const days = Array.from({length: 12}, (v, k) => k+1);

    return (
        <React.Fragment>
            {error.exists ? <NoPeeking error={error} setError={setError}/> : null}
            <div className="calendar">
                {days.map(day => <Flap key={day} day={day} openContent={openContent} setError={setError} setDayToOpen={setDayToOpen}/>)}
                <Content contentIsOpen={contentIsOpen} openContent={openContent} day={dayToOpen}/>
            </div>
        </React.Fragment>
    );
}

export default App;
