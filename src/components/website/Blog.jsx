import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

const Blog = props => (
    <React.Fragment>
        <Link to='/'><h1>{props.post.title}</h1></Link>
        <p>By: {props.post.author}</p>
        <p>{props.post.topics.join(', ')}</p>
        <p>{props.post.content}</p>
        <i>{moment(props.post.published).format("MMMM D, YYYY")}</i>
        <hr />
        </React.Fragment>
)

export default class Posts extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/pubs/')
            .then(response => {
                this.setState({ posts: response.data })
            })
            .catch((err => {
                console.log(err)
            }))
    }

    blogList() {
        return this.state.posts.map(currentpost => {
            return  <Blog post={currentpost} key={currentpost._id} />
        })
    }

    render() { 
        return (
            <div className="container" style={navSpace}>
                <div className="col-12 col-lg-8 offset-lg-2">
                    { this.blogList() }
                </div>
            </div>
        )
    }
}

const navSpace = {
    marginTop: "76px" 
}