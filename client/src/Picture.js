import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Picture extends Component{
	state ={
		currentImage: ""
	}
	componentWillMount(){
		axios.get('http://localhost:3001/images/' + this.props.match.params.imageid).then(response => {
			this.setState({
				currentImage: response.data.url
			})
		})
	}

	render(){
		return(
			<div>
				<img src={this.state.currentImage} />
			</div>
		)
	}
}

export default Picture