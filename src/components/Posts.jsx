import React, { Component } from 'react'
import moment from 'moment'

class Posts extends Component {
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
            <div className="col-12 col-lg-8 offset-lg-2">
                <h1 className="my-4" key={index}><a href="/">{post.title}</a></h1>
                <p key={index}>By: {post.authors.join(', ')}</p>
                <p key={index}>{post.topics.join(' | ')}</p>
                <p key={index}>{post.content}</p>
                <i key={index}>{moment(post.published).format("MMMM D, YYYY")}</i>
                <hr />
            </div>
        )
        return (
            <div className="container" style={navSpace}>
                {posts}
            </div>
        )
    }
}

const navSpace = {
    marginTop: "100px" 
}

export default Posts
