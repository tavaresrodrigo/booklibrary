import React, {Component } from 'react'
import user from '../classes/user'
export default class Login extends Component {
    constructor(props) {
        super(props)
        debugger
        this.submit = this.submit.bind(this)
        const {callback} = props.match.params
        this.state = {
          callback: callback
        }
      }
      submit(){
          console.log(document.getElementById("email").value, document.getElementById("password").value)
          const u = new user()
          u.name = "aa"
          u.email = "bb"
          u.isActive = true
          u.phone = 123
          u.Admin = false
          this.state.callback(u)
      }
    render(){
        return (
            <div>
            <p>e-mail: <input id="email" type="text" name="email" /></p>
            <p>password: <input id="password" type="password" name="password" /></p>
            <input type="button" value="Log-in" onClick={this.submit}/> 
            </div>
        )
    }
}