import React, {Component } from 'react';

export default class Admin extends Component {
    render(){
        return (
            <div>
            <p>This page should only be accessable to people logged in with admin rights</p>
            <p> This is where all the options for admins will go: Example</p>
            <ol>
                <li>View all users</li>
                <li>Delete User</li>
                <li>Edit User</li>
                <li>Add books</li>
                <li>Delete books</li>
            </ol>
            </div>
        )
    }
}