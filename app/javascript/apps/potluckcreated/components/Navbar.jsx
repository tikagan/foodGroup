import React, { Component } from 'react'
import myImage from '../../images/foodgroup.png';


class  Navbar extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	
	    };
	   
	}

	render() {
		return (
		  <div >
	        <nav className="navbar navbar-default">
              <div className="container-fluid">
              <div className="navbar-header">
              <a className="navbar-brand" href="#" />
              <img className="Brand" src={myImage} />
              </div>
             </div>
            </nav>

        </div>
		)
	} 
}









export default Navbar