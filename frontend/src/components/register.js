import React, {Component } from 'react';
import axios from 'axios';
export default class Register extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        


        this.state = {
            email: '',
            password: '',
            name: '',
            phone: '',
            isActive: true,
            userType: 'User'

        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            phone: this.state.phone,
            isActive: this.state.isActive,
            userType: this.state.userType
        }

        console.log(user);

        //axios.post('http://localhost:3000/register/', user) Get rodrigo to look into
        //.then(res => console.log(res.data));

        window.location = '/'; //This brings you back to the homepage after submit

    }

    render(){
        return (
            <div>
            <h3>Registration</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}>
          </input>
        </div>
        <div className="form-group"> 
          <label>Password: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}>
          </input>
        </div>
        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}>
          </input>
        </div>
        <div className="form-group"> 
          <label>Phone Number: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}>
          </input>
        </div>
        

        <div className="form-group">
          <input type="submit" value="User Registration" className="btn btn-primary" />
        </div>
      </form>
            </div>
        )
    }
}