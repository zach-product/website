import React, { Component } from 'react'
import { NavBar, Posts } from '../components';

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Posts />
            </React.Fragment>
        )
    }
}

export default Blog
