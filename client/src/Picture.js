import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store from './store'
import {getCurrentImage} from './albumAppActions'

class Picture extends Component{
	state ={
		currentImage: {}
	}
	componentDidMount(){
		getCurrentImage(this.props.match.params.imageid)

		this.unsubscribe = store.subscribe(() =>{
			const state = store.getState()

			this.setState({
				currentImage: state.currentImage
			})
		})
	}

	componentWillUnmount(){
		this.unsubscribe()
	}

	render(){
		return(
			<div>
				<img src={this.state.currentImage.url} />
				<Link to={'/album/' + this.props.match.params.albumid}  >Link back to Album</Link>
			</div>
		)
	}
}

export default Picture