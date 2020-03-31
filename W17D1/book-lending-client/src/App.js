import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookIndex from './pages/BookIndex';
import BookShow from './pages/BookShow';
import AuthorIndex from './pages/AuthorIndex';
import AuthorShow from './pages/AuthorShow';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/navbar/NavBar';
import './App.css';

export default () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/books" component={BookIndex} />
        <Route exact path="/books/:bookId" component={BookShow} />
        <Route exact path="/authors" component={AuthorIndex} />
        <Route exact path="/authors/:authorId" component={AuthorShow} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};
