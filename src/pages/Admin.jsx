import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBarAdmin from '../components/admin/NavBarAdmin'
import { Posts } from '../components';


export class Admin extends Component {
    render() {
        return (
            <Router>
                <NavBarAdmin />
                <br/>
                <Switch>
                    <Route path="/admin" exact component={Posts} />
                {/* Add Routes below to admin pages */}
                </Switch>
            </Router>
        )
    }
}

export default Admin
