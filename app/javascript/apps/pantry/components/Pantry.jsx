import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'


class  Pantry extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	
	    };
	   
	}

		render() {
		return (
			<div className="cutbackground">
		    <Navbar />
		    </div>
		)
	} 
}









export default Pantry