import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default class CreatePost extends Component {
    constructor(props) {
        super(props)

        this.onChangeInput = this.onChangeInput.bind(this)
        this.onChangePublished = this.onChangePublished.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            title: '',
            author: '',
            topics: '',
            content: '',
            published: new Date(),
            users: [],
        }
    }

    componentDidMount() {
        this.setState({
            users: ['test user'],
            author: 'test user', 
        })
    }

    onChangeInput(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value,
        })
    }

    onChangePublished(date) {
        this.setState({
            published: date
        })
    }

    onSubmit(e) {
        e.preventDefault()
        
        const post = {
            title: this.state.title,
            author: this.state.author,
            topics: this.state.topics,
            content: this.state.content,
            published: this.state.published,
        }

        console.log(post)

        window.location = '/admin/posts'
    }

    render() {
        const { title, author, topics, content, published } = this.state
        return (
            <div className="container" style={navSpace}>
                <h3 className='mb-3'>Create New Post</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={title}
                            onChange={this.onChangeInput}
                        />
                    </div>
                    <div className="form-group">
                        <label>Author:</label>
                        <select
                            ref="userInput"
                            required
                            className="form-control"
                            name="author"
                            value={author}
                            onChange={this.onChangeInput}>
                                {
                                    this.state.users.map(user => {
                                        return <option
                                            key={user}
                                            value={user}>{user}
                                        </option>
                                    })
                                }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Topics:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="topics"
                            value={topics}
                            onChange={this.onChangeInput}
                        />
                    </div>
                    <div className="form-group">
                        <label>Content:</label>
                        <textarea
                            type="text"
                            rows="10"
                            className="form-control"
                            name="content"
                            value={content}
                            onChange={this.onChangeInput}
                        />
                    </div>
                    <div className="form-group">
                        <label>Published:</label>
                        <div>
                            <DatePicker
                                selected={published}
                                onChange={this.onChangePublished} 
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            className="btn btn-primary"
                            value="Create New Post"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

const navSpace = {
    marginTop: "76px" 
}