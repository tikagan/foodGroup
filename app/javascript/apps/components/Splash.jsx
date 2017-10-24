import React, { Component } from 'react'
import myImage from '../../images/foodgroup.png';
import Backgroundimage from '../../images/shrimp.gif';

class  Splash extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	
	    };
	   
	}


render() {
		return (
			<div className= "splashbackground">
			  <img className="logo" src={myImage} />
			   <button type="button" className="btn btn-default frank"> What's for dinner?</button>
		    </div>
		)
	} 
}




	export default Splash