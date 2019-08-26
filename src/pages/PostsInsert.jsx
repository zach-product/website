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

    handleChangeInput = async e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: [value] })
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
                    name="title"
                    value={title}
                    onChange={this.handleChangeInput}
                />

                <Label>Authors: </Label>
                <InputText
                    type="text"
                    name="authors"
                    value={authors}
                    onChange={this.handleChangeInput}
                />

                <Label>Topics: </Label>
                <InputText
                    type="text"
                    name="topics"
                    value={topics}
                    onChange={this.handleChangeInput}
                />

                <Label>Content: </Label>
                <InputTextArea
                    type="text"
                    rows="10"
                    name="content"
                    value={content}
                    onChange={this.handleChangeInput}
                />

                <Label>Published: </Label>
                <InputText
                    type="date"
                    name="published"
                    value={published}
                    onChange={this.handleChangeInput}
                />

                <Button onClick={this.handleIncludePost}>Submit Post</Button>
                <CancelButton href={'/admin'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default PostsInsert
