import React, {Component} from 'react'
import {Link} from 'react-router-dom'


//styles
import './Preview.css'

class Preview extends Component{

	render(){
		return(
			<div className="preview">
				<Link to={this.props.path} className="previewLink">
					<div className="previewImageWrapper"><img src={this.props.previewImage} className="previewImage" alt={this.props.name}/></div>
					<div className="previewName">{this.props.name}</div>
				</Link>
			</div>
		)
	}
}

export default Preview