import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Website, Admin } from './pages'

function App() {
    return (
        <Router>
            <Route path="/" exact component={Website} />
            <Route path="/admin" exact component={Admin} />
        </Router>
    )
}

export default App
