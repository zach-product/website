import React, { Component } from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

import '../../App.css'

export default class Home extends Component {
    constructor(props) {
        super(props)
        
        this.toggleHoverAbout = this.toggleHoverAbout.bind(this)
        this.toggleHoverPortfolio = this.toggleHoverPortfolio.bind(this)
        this.toggleHoverBlog = this.toggleHoverBlog.bind(this)

        this.state = {
            hoverAbout: false,
            hoverPortfolio: false,
            hoverBlog: false,
        }

    }

    toggleHoverAbout() {
        this.setState({
            hoverAbout: !this.state.hoverAbout
        })
    }

    toggleHoverPortfolio() {
        this.setState({
            hoverPortfolio: !this.state.hoverPortfolio
        })
    }

    toggleHoverBlog() {
        this.setState({
            hoverBlog: !this.state.hoverBlog
        })
    }

    

    render() {
        const { hoverAbout, hoverPortfolio, hoverBlog } = this.state
        return (
            <div style={bgHome}>
                <div style={homeContainer}>
                    <div  className="col-12" style={mainContent}>
                        <img className="mb-3 mb-lg-5" style={logoHome} src={logo} alt="logo"/>                            
                        <h1 adjustsFontSizeToFit minimumFontScale={.5} className="mb-3 mb-lg-4 text-white">Hi. I'm Zach. Nice to meet you!</h1>
                        <p adjustsFontSizeToFit minimumFontScale={.5} className="mb-3 mb-lg-4 text-white" style={roleStyles}>Product Manager &nbsp; • &nbsp; UX/UI Designer &nbsp; • &nbsp; Front End Developer</p>
                        <div className="col-12">
                            <Link to="/about"><button onMouseEnter={this.toggleHoverAbout} onMouseLeave={this.toggleHoverAbout} style={ hoverAbout ? btnHomeHover : btnHome } className='col-12 col-lg-2 btn btn-lg m-lg-3 mb-3'>About</button></Link>
                            <Link to="/portfolio"><button onMouseEnter={this.toggleHoverPortfolio} onMouseLeave={this.toggleHoverPortfolio} style={ hoverPortfolio ? btnHomeHover : btnHome } className='col-12 col-lg-2 btn btn-lg m-lg-3 mb-3'>Portfolio</button></Link>
                            <Link to="/blog"><button onMouseEnter={this.toggleHoverBlog} onMouseLeave={this.toggleHoverBlog} style={ hoverBlog ? btnHomeHover : btnHome } className='col-12 col-lg-2 btn btn-lg m-lg-3 mb-3'>Blog</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



const bgHome = {
    background: "#1e2958",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const homeContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    padding: "3%"
}

const mainContent = {
    textAlign: "center"
}

const logoHome = {
    maxWidth: "250px",
    height: "auto"
}

const roleStyles = {
    fontSize: "28px",
    fontWeight: "200",
    letterSpacing: "1px"
}

const btnHome = {
    borderColor: "#8fcc9f",
    color: "#8fcc9f"
}

const btnHomeHover = {
    background: "#8fcc9f",
    color: "#1e2958",
    fontWeight: "600"
}