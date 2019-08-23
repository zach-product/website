import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div.attrs({
    className: 'container-fluid container-max-fluid'
})`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdatePost extends Component {
    updateUser = e => {
        e.preventDefault()

        window.location.href = `/posts/update/${this.props.id}`        
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeletePost extends Component {
    deleteUser = e => {
        e.preventDefault()

        if(
            window.confirm(
                `Are you sure you want to delete ${this.props.id}?`,
            )
        ) {
            api.deletePostById(this.props.id)
            window.location.reload()
        }
    }
    
    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class PostsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async() => {
        this.setState({ isLoading: true})

        await api.getAllPosts().then(posts => {
            this.setState({
                posts: posts.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { posts, isLoading } = this.state
        console.log('TCL: PostsList -> render -> posts', posts)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Title',
                accessor: 'title',
                filterable: true,
            },
            {
                Header: 'Authors',
                accessor: 'authors',
                filterable: true,
                Cell: props => <span>{props.value.join(', ')}</span>,
            },
            {
                Header: 'Topics',
                accessor: 'topics',
                filterable: true,
                Cell: props => <span>{props.value.join(', ')}</span>,
            },
            {
                Header: 'Content',
                accessor: 'content',
                filterable: true,
            },
            {
                Header: 'Published',
                accessor: 'pubished',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeletePost id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdatePost id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!posts.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={posts}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default PostsList