import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../components/game';

document.addEventListener("DOMContentLoaded", (event) => {
    const main = document.getElementById('root');

    ReactDOM.render(<Game />, main);
})