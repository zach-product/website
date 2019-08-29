import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBarAdmin, Posts, CreatePost, EditPost, Projects, CreateProject, EditProject, CreateUser } from '../components';




export class Admin extends Component {
    render() {
        return (
            <Router>
                <NavBarAdmin />
                <br/>
                <Switch>
                    <Route path="/admin/posts" exact component={Posts} />
                    <Route path="/admin/posts/create" component={CreatePost} />
                    <Route path="/admin/posts/edit/:id" component={EditPost} />
                    <Route path="/admin/projects" exact component={Projects} />
                    <Route path="/admin/projects/create" component={CreateProject} />
                    <Route path="/admin/projects/edit/:id" component={EditProject} />
                    <Route path="/admin/users/create" component={CreateUser} />
                </Switch>
            </Router>
        )
    }
}

export default Admin
