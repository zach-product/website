import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})`
    margin-top: 20px;
`

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const InputTextArea = styled.textarea.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: 'btn btn-primary',
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: 'btn btn-danger',
})`
    margin: 15px 15px 15px 5px;
`

class PostsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            authors: '',
            topics: '',
            content: '',
            published: '',
        }
    }

    handleChangeInputTitle = async e => {
        const title = e.target.value
        this.setState({ title })
    }

    handleChangeInputAuthors = async e => {
        const authors = e.target.value
        this.setState({ authors })
    }

    handleChangeInputTopics = async e => {
        const topics = e.target.value
        this.setState({ topics })
    }

    handleChangeInputContent = async e => {
        const content = e.target.value
        this.setState({ content })
    }

    handleChangeInputPublished = async e => {
        const published = e.target.value
        this.setState({ published })
    }

    handleIncludePost = async () => {
        const { title, authors, topics, content, published } = this.state
        const arrayAuthors = authors.split(', ')
        const arrayTopics = topics.split(', ')
        const payload = { title, authors: arrayAuthors, topics: arrayTopics, content, published }

        await api.insertPost(payload).then(res => {
            window.alert('Post submitted successfully')
            this.setState({
                title: '',
                authors: '',
                topics: '',
                content: '',
                published: '',
            })
        })
    }

    render() {
        const { title, authors, topics, content, published } = this.state
        return (
            <Wrapper>
                <Title>Create New Blog Post</Title>

                <Label>Title: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeInputTitle}
                />

                <Label>Authors: </Label>
                <InputText
                    type="text"
                    value={authors}
                    onChange={this.handleChangeInputAuthors}
                />

                <Label>Topics: </Label>
                <InputText
                    type="text"
                    value={topics}
                    onChange={this.handleChangeInputTopics}
                />

                <Label>Content: </Label>
                <InputTextArea
                    type="text"
                    rows="10"
                    value={content}
                    onChange={this.handleChangeInputContent}
                />

                <Label>Published: </Label>
                <InputText
                    type="date"
                    value={published}
                    onChange={this.handleChangeInputPublished}
                />

                <Button onClick={this.handleIncludePost}>Submit Post</Button>
                <CancelButton href={'/posts'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default PostsInsert
