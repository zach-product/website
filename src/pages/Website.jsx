import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { Home, About, Portfolio, ProjectAlchemist, ProjectSignOnSite, Blog, OnePost } from '../components';

export default class Website extends Component {
    render() {
        return ( 
            <Router>
                <Switch>
                    <Route path="/about" exact component={About} />
                    <Route path="/portfolio" exact component={Portfolio} />
                    <Route path="/portfolio/alchemist" component={ProjectAlchemist} />
                    <Route path="/portfolio/signonsite" component={ProjectSignOnSite} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/blog/:id" component={OnePost} />
                    <Route path="/" exact component={Home} />
                    <Redirect from="*" to="/" />  
                </Switch>
            </Router>
        )
    }
}