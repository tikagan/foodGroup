import React, { Component } from 'react'
import myImage from '../../images/foodgroup.png';




class Pagetwo extends Component {
	render() {
		return (
			<div>
			
				<img className="logo" src={myImage} />
			     <button type="button" class="btn btn-default"> you got to page two </button>
			
		    </div>
		)
	}
}




export default Pagetwo