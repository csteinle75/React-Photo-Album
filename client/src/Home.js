import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import store from './store'

//Components
import Preview from './Preview'

//actions
import {getAlbums} from './albumAppActions'

//Styles
import './Home.css'

class Home extends Component {
	state = {
		albums: []
	}

	componentDidMount(){
		getAlbums()

		store.subscribe(() =>{
			const state = store.getState()

			this.setState({
				albums: state.albums
			})
		})
	}

	componentDidUpdate(){
		
	}

	render(){
		return(
			<div>
				<h3 id="albumPreviewTitle">My Albums</h3>
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