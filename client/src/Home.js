import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

//Components
import Preview from './Preview'

//Styles
import './Home.css'

class Home extends Component {
	state = {
		albums: []
	}

	componentDidMount(){
		axios.get('http://localhost:3001/albums?_embed=images').then(response => {
			this.setState({
				albums: response.data
			})
		})
	}

	componentDidUpdate(){
		console.log(this.state)
	}

	render(){
		return(
			<div>
				<h3>My Albums</h3>
				<div id="albumPreviews">
					{this.state.albums.map((album, i) => (
							<Preview path={'album/' + album.id} name={album.name} previewImage={album.images[0].url} key={'album-' + i} />
						)
					)}
				</div>
				<h3>This is just for space</h3>
			</div>
		)
	}
}

export default Home