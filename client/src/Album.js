import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store from './store'
import {getAlbums, getCurrentAlbum} from './albumAppActions'

//components
import Preview from './Preview'

//styles
import './Album.css'

class Sidebar extends Component{
	render(){
		return(
			<div id="albumSidebar">
				<h3 id="sidebarTitle">Your Album Links</h3>
				{this.props.albums.map((album,i) =>(
							<div className="sidebarLinks" key={'sidebar-' + i}><Link to={`/album/${album.id}`}>{album.name}</Link></div>
						)
					)}
				<h4><Link to="/addimages">Add Images</Link></h4>
				<h4><Link to="/">Return to Home</Link></h4>
			</div>
		)
	}
}

class Album extends Component{
	state ={
		albums: [],
		currentAlbum: {
			images: []
		}
	}

	componentDidMount(){
			getCurrentAlbum(this.props.match.params.albumid)
			// getAlbums()

		this.unsubscribe = store.subscribe(() =>{
			const state = store.getState()

			this.setState({
				currentAlbum: state.currentAlbum,
				albums: state.albums
			})
		})
	}
	componentWillReceiveProps(newProps){
		if(this.props.match.params.albumid !== newProps.match.params.albumid) {
			getCurrentAlbum(newProps.match.params.albumid)
		}
	}

	componentWillUnmount(){
		this.unsubscribe()
	}

	render(){

		return(
			<div id="albumPageContainer">
				<Sidebar albums={this.state.albums}/>
				<div id="albumMain">
					<h3 id="albumTitle">"{this.state.currentAlbum.name}"</h3>
					<div id="imagePreviews">
						{console.log('this.state: ' , this.state)}
						{this.state.currentAlbum.images.map((image, i) => (
								<Preview path={image.albumId + '/' + image.id} name={image.name} previewImage={image.url} key={'image-' + i} />
							)
						)}
					</div>
				</div>
			</div>
		)
	}
}

export default Album