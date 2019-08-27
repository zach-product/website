import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { LandingPage, Portfolio, Blog } from './pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/blog" exact component={Blog} />
            </Switch>
        </Router>
    )
}

export default App
