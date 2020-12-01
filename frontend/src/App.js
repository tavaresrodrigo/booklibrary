import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"

import Homepage from './components/homepage';
import Register from './components/register';
import Login from './components/login';
import ViewBooks from './components/view-books';
import Admin from './components/admin';
import MyBooks from './components/my-books';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} ><Login/></Route>
        <Route path="/register" exact component={Register} />
        <Route path="/books" exact component={ViewBooks} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/my-books" exact component={MyBooks} />
      </div>
    </Router>
  );
}

export default App;
