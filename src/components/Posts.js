import React, { Component } from 'react'
import OnePost from './OnePost';
import Topics from './Topics';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTopics: []
        };
        this.updateTopic = this.updateTopic.bind(this);
    }

    getTopics = (posts) => {
        // create an empty set 
        let allTopics = [];
        // then add each unique topic to that set
        for(let i = 0; i < posts.length; i++){
            for(let j = 0; j < posts[i].topics.length; j++){
                if(allTopics.includes(posts[i].topics[j]) === false){
                allTopics.push(posts[i].topics[j]);
                };    
            };
        };
        // console.log(allTopics);
        return allTopics;
    }

    updateTopic = topic => {
        let topics = this.state.selectedTopics;
    
        if(topics.includes(topic) === false) {
            topics.push(topic);
        } else if(topics.includes(topic) === true) {
            let index = topics.indexOf(topic);
            if(topic !== -1) {
                topics.splice(index, 1);
            };
        };
        console.log(topics);
        this.setState({
            selectedTopics: topics
        });
    }

    getPosts = posts => {
        let results = this.props.posts;
        let topics = this.state.selectedTopics;
        let filteredResults = [];
        for(let i = 0; i < posts.length; i++){
            for(let j = 0; j < posts[i].topics.length; j++){
                if(topics.includes(posts[i].topics[j]) === true && filteredResults.includes(posts[i]) === false){
                    filteredResults.push(posts[i]);
                }; 
            };
        };
        if(filteredResults.length < 1 || filteredResults === undefined) {
            console.log(results);
            return results;
        } else {
            console.log(filteredResults);
            return filteredResults;
        };
    }

    render() {
        return ( 
            <div>
                <h5>Topics</h5>
                <hr />
                <Topics
                    updateTopic={this.updateTopic}
                    getTopics={this.getTopics} 
                    posts={this.props.posts} />
                <h5>All Posts</h5>
                <hr />
                {this.getPosts(this.props.posts).map((post, index) => (
                    <OnePost key={index} post={post} />                    
                ))}
            </div>
        )
    }
};

export default Posts
