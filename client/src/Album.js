import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Album extends Component{
	render(){
		return(
			<div>
				<h3>You are currently in album {this.props.match.params.albumid}</h3>
				<Link to="/">Return to Home Component</Link>
			</div>
		)
	}
}

export default Album