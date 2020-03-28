import React, { useState } from 'react';

function Clock() {
    const [ time, setTime ] = useState(0);
    setTime() {
        time = new Date();
    }
    return (
        <div className="clock">
            <h1>Clock</h1>
            <h3>Time is { time }</h3>
        </div>
    )
}

export default Clock;