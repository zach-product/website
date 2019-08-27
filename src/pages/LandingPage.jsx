import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import Home from '../components/Home';

class LandingPage extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Home />
            </React.Fragment>
        )
    }
}

export default LandingPage