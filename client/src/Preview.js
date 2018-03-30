import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Preview extends Component{
	render(){
		return(
			<div className="preview">
				<Link to={this.props.path}>
					<div><img src={this.props.previewImage} alt={this.props.name}/></div>
					<div>{this.props.name}</div>
				</Link>
			</div>
		)
	}
}

export default Preview