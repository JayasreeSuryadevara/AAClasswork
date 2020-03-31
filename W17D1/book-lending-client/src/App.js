import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookIndex from './pages/BookIndex';
import BookShow from './pages/BookShow';
import AuthorIndex from './pages/AuthorIndex';
import AuthorShow from './pages/AuthorShow';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/navbar/NavBar';
import UserProfile from './pages/UserProfile';
import LoginUser from './pages/LoginUser';
import SignupUser from './pages/SignupUser';
import ProtectedRoute from './components/util/ProtectedRoute';
import AuthRoute from './components/util/AuthRoute';
import './App.css';

export default () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={BookIndex} />
        <AuthRoute exact path="/login" component={LoginUser} />
        <AuthRoute exact path="/signup" component={SignupUser}/>
        <ProtectedRoute exact path="/me" component={UserProfile} />
        <Route exact path="/books/:bookId" component={BookShow} />
        <Route exact path="/authors" component={AuthorIndex} />
        <Route exact path="/authors/:authorId" component={AuthorShow} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};
