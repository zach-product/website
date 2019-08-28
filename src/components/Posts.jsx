import React, { Component } from 'react'
import moment from 'moment'

export default class Posts extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            posts: [
                {
                    title: 'People are CRAZY',
                    authors: ['Zach Pritchard', 'Lucas Da Silva'],
                    topics: ['Product Management', 'User Experience (UX)'],
                    content: "Oh c'mon, this is bullshit! I mean look at this dude, alright? He doesn't even know what planet he's living on! You ever, have like a wild animal trapped in your house? Opossum - big, freaky, lookin' bitch. Hey, since when did they change it to opossum? What's up with that? When I was comin' up it was just possum. Opossum makes it sound like he's Irish or something. Why do they gotta go changing everything?",
                    published: Date()
                },
                {
                    title: 'Crazy are PEOPLE',
                    authors: ['Mark Richards', 'Silvia Lucas'],
                    topics: ['Front End', 'Programming'],
                    content: " I took this vo-tech class in high school, woodworking. I took a lot of vo-tech classes, because it was just big jerk-off, but this one time I had this teacher by the name of... Mr... Mr. Pike. I guess he was like a Marine or something before he got old. He was hard hearing. My project for his class was to make this wooden box. You know, like a small, just like a... like a box, you know, to put stuff in. So I wanted to get the thing done as fast as possible.",
                    published: Date()
                },
            ]
        }
    }

    render() { 
        const posts = this.state.posts.map((post, index) =>
            <React.Fragment>
                <tr>
                    <td key={index}>{post.title}</td>
                    <td key={index}>{post.authors.join(', ')}</td>
                    <td key={index}>{post.topics.join(', ')}</td>
                    <td key={index}>{moment(post.published).format("MMMM D, YYYY")}</td>
                </tr>
            </React.Fragment>
        )
        return (
            <div className="container" style={navSpace}>
                <div className="d-inline align-middle">
                    <h3 className="float-left mb-3">Posts</h3>
                    <a className="btn btn-success font-weight-bold float-right" href="/admin/posts/create" role="button">Create New Post</a>
                </div>
                <table className="table" >
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Authors</th>
                            <th scope="col">Topics</th>
                            <th scope="col">Published</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts}
                    </tbody>
                </table>
            </div>
        )
    }
}

const navSpace = {
    marginTop: "76px" 
}