import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import TextTruncate from 'react-text-truncate'
import { NavBar } from '..';

const Blog = props => (
    <React.Fragment>
        <Link to={"/blog/"+props.post._id}><h2 className="my-4">{props.post.title}</h2></Link>
        {/* <p className="font-italic">By: {props.post.author}</p> */}
        {props.post.topics.map(item => {
            return <p className='btn btn-secondary btn-sm disabled mr-2'>{item}</p>
        })}
        <TextTruncate 
            style={fontStyling}
            line={2}
            element="p"
            truncateText="..."
            text={props.post.content}
            textTruncateChild={<Link to={"/blog/"+props.post._id}>Read on</Link>}
        />
        <i style={dateStyling}>{moment(props.post.published).format("MMMM D, YYYY")}</i>
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
            <React.Fragment>
                <NavBar />
                <div className="container" style={stickyHeader}>
                    <div className="col-12 col-lg-10 offset-lg-1">
                        { this.blogList() }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const stickyHeader = {
    marginTop: "calc(80px + 3%)"
}

const fontStyling = {
    fontSize: "18px",
    fontWeight: "300"
}

const dateStyling = {
    fontSize: "16px",
    fontWeight: "350"
}