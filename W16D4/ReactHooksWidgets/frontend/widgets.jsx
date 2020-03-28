import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("root");
    ReactDOM.render(<Clock />, main)
})
