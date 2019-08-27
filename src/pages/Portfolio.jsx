import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';

class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Projects />
            </React.Fragment>
        )
    }
}

export default Portfolio
