import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'

import logo from '../../assets/logo.svg'

export default class NavBarAbout extends Component {
    constructor(props) {
        super(props)

        this.toggleNavBar = this.toggleNavBar.bind(this)
        this.toggleHoverSub = this.toggleHoverSub.bind(this)
        this.onChangeInput = this.onChangeInput.bind(this)

        this.state = {
            email: '',
            collapsed: true,
            hoverSub: false
        }
    }

    toggleNavBar(e) {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    toggleHoverSub(e) {
        this.setState({
            hoverSub: !this.state.hoverSub
        })
    }

    onChangeInput(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value,
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email
        }

        console.log(user)

        axios.post('http://localhost:3000/user/add', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        window.location = '/admin/posts'
    }

    render() {
        const collapsed  = this.state.collapsed
        const classOne = collapsed ? 'collapse navbar-collapse justify-content-lg-between' : 'collapse navbar-collapse justify-content-lg-between show'
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right'
        const { hoverSub, email } = this.state

        return (
            <header className="fixed-top page-header">
                <nav style={navStyling} className='navbar navbar-expand-lg navbar-dark'>
                    <div className="container">
                        <Link to="/" className="navbar-brand brand-font align-middle mr-3">
                            <img src={logo} width="50" length="50" alt="Zach Pritchard" />
                            {/* <span className="mx-3"></span> */}
                        </Link>
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
                            <ul className="navbar-nav justify-content-inbetween">
                                <li className="nav-item mx-3">
                                    <NavLink style={navLinks} className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item mx-3">
                                    <NavLink style={navLinks} className="nav-link" to="/portfolio">Portfolio</NavLink>
                                </li>
                                <li className="nav-item mx-3">
                                    <NavLink style={navLinks} className="nav-link" to="/blog">Blog</NavLink>
                                </li>
                            </ul>
                            <div className="align-middle">
                                <form className="form-inline mx-4 mx-lg-0 my-3 my-lg-0" onSubmit={this.onSubmitSubscribe}>
                                    <input name="email" value={email} onChange={this.onChangeInput} className="form-control mr-sm-2" type="email" placeholder="have@greatday.com"></input>
                                    <button onSubmit={this.onSubmit} onMouseEnter={this.toggleHoverSub} onMouseLeave={this.toggleHoverSub} style={ hoverSub ? subBtnHover : subBtn } className="btn my-2 my-sm-0" type="submit">Get In Touch</button>!
                                </form>
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

const navLinks = {
    fontWeight: "400",
    fontSize: "18px",
    margin: '.8rem',
    letterSpacing: "1px"
}

const subBtn = {
        borderColor: "#8fcc9f",
        color: "#8fcc9f"
}
    
const subBtnHover = {
    background: "#8fcc9f",
    color: "#1e2958",
}