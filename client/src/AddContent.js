import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store from './store'
import {getImages, getAlbums} from './albumAppActions'

class AddContent extends Component {
	state = {}

	componentWillMount(){
		getImages()
		getAlbums()

		this.unsubscribe = store.subscribe(() =>{
			const state = store.getState()

			this.setState({
				...state
			})
		})
	}

	render(){
		return(
			<div>
				<h3>Add Content Page</h3>
				<p>Under Construction</p>
				<Link to="/">Return Home</Link>
			</div>
		)
	}
}

export default AddContent