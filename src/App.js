import React from 'react';
import Flap from './Flap';
import './App.css';

function App() {

    const days = Array.from({length: 9}, (v, k) => k+1);

    return (
        <div className="calendar">
            {days.map(day => <Flap key={day} day={day}/>)}
        </div>
    );
}

export default App;
