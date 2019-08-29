import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBarAdmin from '../components/NavBarAdmin'
import { Posts } from '../components';
import { CreatePost, CreateUser } from '.';


export class Admin extends Component {
    render() {
        return (
            <Router>
                <NavBarAdmin />
                <br/>
                <Switch>
                    <Route path="/admin/posts" exact component={Posts} />
                    <Route path="/admin/posts/create" exact component={CreatePost} />
                    <Route path="/admin/users/create" exact component={CreateUser} />
                {/* Add Routes below to admin pages */}
                </Switch>
            </Router>
        )
    }
}

export default Admin
