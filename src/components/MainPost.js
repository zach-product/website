import React, { Component } from 'react';

class MainPost extends Component {
    render() {
        const { topics, title, authors, content, published } = this.props.post;
        return (
            <div>
                <h1>{ title }</h1>
                {topics.map((topic, index) => 
                    <i key={index} style={inlineTag} className='pr-2'>{ topic }</i>
                )}
                <h3>{ authors }</h3>
                <p>{ content }</p>
                <i>{ published }</i>
            </div>
        )
    }
}

const inlineTag = {
    background: ''
}


export default MainPost
