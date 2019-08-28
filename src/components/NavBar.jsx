import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.svg'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.toggleNavBar = this.toggleNavBar.bind(this)

        this.state = {
            collapsed: true,
        }
    }

    toggleNavBar() {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    render() {
        const collapsed  = this.state.collapsed
        const classOne = collapsed ? 'collapse navbar-collapse justify-content-lg-between' : 'collapse navbar-collapse justify-content-lg-between show'
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right'


        return (
            <header className="fixed-top page-header">
                <nav style={navStyling} className='navbar navbar-expand-lg navbar-dark'>
                    <div className="container">
                        <a href="/" className="navbar-brand brand-font align-middle">
                            <img src={logo} width="50" length="50" alt="Zachary Pritchard" />
                            <span className="ml-3">Zach Pritchard</span>
                        </a>
                        <button 
                            onClick={this.toggleNavBar} 
                            className={`${classTwo}`} 
                            type="button"
                            target="_blank"
                            data-toggle="collapse" 
                            data-target="#navbarNav" 
                            aria-controls="navbarNav" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className={`${classOne}`} id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="/blog">Blog</Link>
                                </li>
                            </ul>
                            <div className="align-middle">
                                <a class="btn btn-outline-light font-weight-bold float-right my-1" href="mailto:hello@prodforward.com" role="button">Subscribe</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

const navStyling = {
    background: '#1e2958'
}

export default NavBar
