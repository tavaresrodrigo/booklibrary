import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  constructor () {
    super();
    this.state = {user:null}
  }
  callback (bookUser) {
    this.setState({user:bookUser})
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">BookLibrary</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="login" params={this.callback}>Login</Link>
          </li>
          <li className="navbar-item">
          <Link to="/register" className="nav-link">Register</Link>
          </li>
          {this.state.user ?
           <li className="navbar-item">
           <Link to="/books" className="nav-link">Book List</Link>
           </li>:null
          }
          <li className="navbar-item">
          <Link to="/my-books" className="nav-link">Your Books</Link>
          </li>
          <li className="navbar-item">
          <Link to="/admin" className="nav-link">Admin</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}