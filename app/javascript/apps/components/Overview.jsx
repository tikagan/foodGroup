import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Inventory from './inventory.jsx'
import Menu from './menu.jsx'
import Navbar from './Navbar.jsx'

import { Route, BrowserRouter,Link } from 'react-router-dom'
import Grocerylist from '../grocerylist/components/Grocerylist.jsx'



class  Overview extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	
	    };

	   
	}

	render() {
	
		return (
			<div className="cutbackground">
		    <Navbar />
			<div className="menu">
			  <Inventory />
			  <Menu />
		     </div>
		    
		     </div>
		)
	} 
}









export default Overview