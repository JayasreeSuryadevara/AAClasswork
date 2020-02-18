import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const tabs = [{ title: "One", content: "One Content" }, 
        { title: "Two", content: "Two Content"},
        { title: "Three", content: "Three Content"}]
    // ReactDOM.render(<Clock /> , root);
    ReactDOM.render(<Tabs tabs={ tabs } />, root);
});
