import React, { Component } from 'react'
import myImage from '../../images/foodgroup.png';
import Backgroundimage from '../../images/shrimp.gif';

class  Splash extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	
	    };
	   
	}
 // <button type="button" className="btn btn-default frank"> "What's for dinner?"</button>

render() {
		return (
			<div className= "splashbackground">
			<a href="/auth/google_oauth2" className="goog">Sign in with Google</a>
			<a href="/auth/facebook" className="book">Sign in with Facebook</a>
			  <img className="logo" src={myImage} />
			  
		    </div>
		)
	} 
}




	export default Splash