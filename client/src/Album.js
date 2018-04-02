import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect, Link, withRouter} from 'react-router-dom'
import axios from 'axios'
import store from './store'
import {getCurrentAlbum} from './albumAppActions'

//components
import Preview from './Preview'
import Picture from './Picture'

//styles
import './Album.css'

class Sidebar extends Component{
	render(){
		return(
			<div id="albumSidebar">
				<div>Sidebar</div>
			</div>
		)
	}
}

class Album extends Component{
	state ={
		currentAlbum: {
			images: []
		}
	}

	componentDidMount(){
		getCurrentAlbum(this.props.match.params.albumid)

		store.subscribe(() =>{
			const state = store.getState()

			this.setState({
				currentAlbum: state.currentAlbum
			})
		})

	}

	render(){

		return(
			<div id="albumPageContainer">
				<Sidebar />
				<div>
					<h3>You are currently in album {this.props.match.params.albumid}</h3>
					<div id="imagePreviews">
						{this.state.currentAlbum.images.map((image, i) => (
								<Preview path={image.albumId + '/' + image.id} name={image.name} previewImage={image.url} key={'image-' + i} />
							)
						)}
					</div>
					<Link to="/">Return to Home Component</Link>
				</div>
			</div>
		)
	}
}

export default Album