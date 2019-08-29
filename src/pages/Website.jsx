import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import { NavBar, Home, Portfolio, OneProject, Blog, OnePost } from '../components';

export default class Website extends Component {
    render() {
        return (
            <Router>
                <NavBar />
                <br />
                <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/portfolio/:id" component={OneProject} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/blog/:id" component={OnePost} />
                <Route path="/" exact component={Home} />
                <Redirect from="*" to="/" />
            </Router>
        )
    }
}