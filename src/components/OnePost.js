import React, { Component } from 'react';

class OnePost extends Component { 
    
    
    
    render() {
        const { topics, title, authors, published } = this.props.post;
        return (
            <div style={postCard}>
                {topics.map((topic, index) =>
                    <i key={index} className='pr-2'>{ topic }</i>
                    )}
                <h4>{ title }</h4>
                <h6>{ authors }</h6>
                <i>{ published }</i>
            </div>
        )
    }
}

const postCard = {
    background: '#f1f3f5',
    padding: '20px',
    margin: '5px',
    border: '#1f2955'
}

export default OnePost
