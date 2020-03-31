import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookIndex from './pages/BookIndex';
import logo from './logo.svg';
import './App.css';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={BookIndex} />
      </Switch>
    </BrowserRouter>
  );
};
