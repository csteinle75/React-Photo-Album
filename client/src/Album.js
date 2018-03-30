import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect, Link, withRouter} from 'react-router-dom'
import axios from 'axios'

//components
import Preview from './Preview'
import Picture from './Picture'

//styles
import './Album.css'

class Sidebar extends Component{
	render(){
		return(
			<div>
				Sidebar
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
		axios.get('http://localhost:3001/albums/' + this.props.match.params.albumid + '?_embed=images').then(response => {

			this.setState({
				currentAlbum: response.data
			})
		})
	}

	componentDidUpdate(){

	}

	render(){

		console.log(this.props)
		return(
			<div>
				<Sidebar />
				<h3>You are currently in album {this.props.match.params.albumid}</h3>
					
					{this.state.currentAlbum.images.map((image, i) => (
							<Preview path={image.albumId + '/' + image.id} name={image.name} previewImage={image.url} key={'image-' + i} />
						)
					)}
				<Link to="/">Return to Home Component</Link>
				<Route exact path="/album/:albumid/:imageid" component={Picture}/>
			</div>
		)
	}
}

export default Album