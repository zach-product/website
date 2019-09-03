import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import { NavBar } from '..';

export default class OnePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            author: '',
            topics: [],
            content: '',
            published: new Date(),
        }
    }

    componentDidMount() {
    axios.get('http://localhost:3000/pubs/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                title: response.data.title,
                author: response.data.author,
                topics: response.data.topics,
                content: response.data.content,
                published: new Date(response.data.published),
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        const { title, topics, content, published } = this.state
        return (
            <React.Fragment>
                <NavBar />
                <div className="container" style={stickyHeader}>
                    <div className="col-12 col-lg-10 offset-lg-1">
                        <h1 className="mb-3">{title}</h1>
                        {topics.map(item => {
                            return <p className='btn btn-secondary btn-sm disabled mr-2 mb-2'>{item}</p>
                        })}
                        <p style={fontStyling} className="font-italic float-lg-right my-2">{moment(published).format("MMMM D, YYYY")}</p>
                        <hr className="mb-4" />
                        <p style={contentStyling}>{content}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const contentStyling = {
    fontSize: "20px",
    fontWeight: "300",
}

const stickyHeader = {
    marginTop: "calc(80px + 3%)"
}

const fontStyling = {
    fontSize: "20px",
    fontWeight: "300",
}