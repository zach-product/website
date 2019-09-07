import React, { Component } from 'react'
import axios from 'axios'

export default class ContactForm extends Component {
    constructor(props) {
        super(props)

        this.onChangeInput = this.onChangeInput.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.toggleHoverBtn = this.toggleHoverBtn.bind(this)

        this.state = {
            email: '',
            message: '',
            hoverBtn: false,
            emailSent: false,
        }
    }

    toggleHoverBtn(e) {
        this.setState({
            hoverBtn: !this.state.hoverBtn
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
            email: this.state.email,
            message: this.state.message
        }

        console.log(user)

        axios.post('http://localhost:3000/users/add', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

            this.setState({ 
                emailSent: !this.state.emailSent 
            })
            
            this.handleClearForm()
    }

    handleClearForm(e) {
        this.setState({ email: '', message: '' })
    }

    render() {
        const { email, message, hoverBtn, emailSent } = this.state 
        return (
            <form onSubmit={this.onSubmit} className="col-12 col-lg-4 offset-lg-8 p-3 mt-1 rounded" style={formContainer}>
                <div className="form-group">
                    <label style={labelStyling} for="email">Email:</label>
                    <input type="email" name="email" value={email} onChange={this.onChangeInput} className="form-control" id="email" ariaLabel="email" placeholder="have@greatday.com" />                    
                </div>
                <div className="form-group">
                    <label style={labelStyling} for="message">Message:</label>
                    <textarea rows="3" type="text" name="message" value={message} onChange={this.onChangeInput} className="form-control" id="message" ariaLabel="message" placeholder="Include a message if you'd like (optional)" />                    
                </div>
                <button onMouseEnter={this.toggleHoverBtn} onMouseLeave={this.toggleHoverBtn} style={ hoverBtn ? contactBtnHover : contactBtn } className="btn my-2 my-sm-0" type="submit">{ emailSent ? "Message Sent!" : "Send Message"}</button>
            </form>
        )
    }
}

const formContainer = {
    background: "#1e2958",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
}

const labelStyling = {
    color: "white",
    fontWeight: "300",
    fontSize: "18px",

}

const contactBtn = {
    borderColor: "#8fcc9f",
    color: "#8fcc9f",
    fontWeight: "500"
}

const contactBtnHover = {
    background: "#8fcc9f",
    color: "#1e2958",
    fontWeight: "500",
}
