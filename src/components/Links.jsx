import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collapse navbar-collapse justify-content-lg-between',
})``

const List = styled.div.attrs({
    className: 'navbar-nav',
})``

const Item = styled.div.attrs({
    className: 'collapse navbar-collapse justify-content-lg-between',
})``

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