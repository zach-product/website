import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import Intro from '../components/Intro';

class LandingPage extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Intro />
            </React.Fragment>
        )
    }
}

export default LandingPage