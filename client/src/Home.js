import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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

		this.unsubscribe = store.subscribe(() =>{
			const state = store.getState()

			this.setState({
				albums: state.albums
			})
		})
	}

	componentWillUnmount(){
		this.unsubscribe()
	}

	render(){
		return(
			<div>
				<h2 id="albumPreviewTitle">My Albums</h2>
				<div id="albumPreviews">
					{this.state.albums.map((album, i) => (
							<Preview path={'album/' + album.id} name={album.name} previewImage={album.images[0].url} key={'album-' + i} />
						)
					)}
				</div>
				<h3><Link to="addimages">Add Images</Link></h3>
			</div>
		)
	}
}

export default Home