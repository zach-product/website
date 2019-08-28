import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from '../components/NavBar';

import { Home, Portfolio, Blog } from './';

export default class Website extends Component {
    render() {
        return (
            <Router>
                <NavBar />
                <br />
                <Route path="/" exact component={Home} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/blog" component={Blog} />
            </Router>
        )
    }
}