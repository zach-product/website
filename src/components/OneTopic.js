import React, { Component } from 'react'

class OneTopic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }

    clickTopic = (e) => {
        this.setState(prevState => ({
            selected: !prevState.selected
        }));
        this.props.updateTopic(this.props.topic);
    }

    render() {
        return (
            <button 
                className='rounded btn btn-sm mb-1' 
                style={!this.state.selected ? btnTopic : btnTopicSelected}
                onClick={this.clickTopic}>
                { this.props.topic }
            </button>
        )
    }
}

const btnTopic = {
    background: '#1f2955',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    margin: '0 3px 3px 3px'
}

const btnTopicSelected = {
    background: '#f1f3f5',
    color: '#1f2955',
    border: '#1f2955',
    padding: '5px 9px',
    margin: '0 3px 3px 3px'
}

export default OneTopic 
