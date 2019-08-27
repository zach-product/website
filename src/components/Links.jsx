import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to='/admin' className="navbar-brand">
                    Prod Forward - Admin
                </Link>
                <Link to="/admin/create">
                    <button className="btn btn-primary float-right">
                        Create Post
                    </button>
                </Link>
            </React.Fragment>
        )
    }
}

export default Links