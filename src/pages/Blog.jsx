import React, { Component } from 'react'
import api from '../api'

import { MainPost, Posts } from '../components'

class Blog extends Component {
    constructor(){
        super()
        
        this.state = {
            posts: []
        }
    }
    
    
    render() {
        return (
            <div className='container-fluid-max p-5 row'>
				<div className='col-12 col-lg-8'>
					<MainPost />
				</div>
				<div className='col-12 col-lg-4'>
					<input className='form-control mb-3' placeholder='Search posts' type='text' />
					<Posts posts={this.state.posts} />
				</div>
			</div>
        )
    }
}

export default Blog
