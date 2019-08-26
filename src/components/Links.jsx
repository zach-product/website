import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collapse navbar-collapse justify-content-lg-between',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
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
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/admin" className="nav-link">
                                Blog
                            </Link>
                        </Item>
                        <Item>
                            <button> to="/admin/create" className="nav-link">
                                Create Post
                            </button>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links