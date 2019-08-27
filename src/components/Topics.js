import React, { Component } from 'react'
import OneTopic from './OneTopic'

class Topics extends Component {

    render() {
        return (
            <div className='pb-3'>
                {this.props.getTopics(this.props.posts).map((topic, index) => (                    
                    <OneTopic 
                        updateTopic={this.props.updateTopic} 
                        key={index} 
                        topic={topic} />            
                ))}
            </div>
        )
    }
}

export default Topics
