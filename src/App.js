import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { LandingPage, Portfolio, Blog, Admin, PostsList, EditPost, CreatePost, ProjectsList, EditProject, CreateProject, CreateUser } from './pages'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/admin" exact component={Admin} />
                <Route path="/admin/posts" exact component={PostsList} />
                <Route path="/admin/posts/edit/:id" exact component={EditPost} />
                <Route path="/admin/posts/create" exact component={CreatePost} />
                <Route path="/admin/projects" exact component={ProjectsList} />
                <Route path="/admin/projects/edit/:id" exact component={EditProject} />
                <Route path="/admin/projects/create" exact component={CreateProject} />
                <Route path="/admin/user" exact component={CreateUser} />
            </Switch>
        </Router>
    )
}

export default App
