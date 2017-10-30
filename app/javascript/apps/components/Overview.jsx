import React, { Component } from 'react'
import ReactDOM from 'react-dom'
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
		    <div className="container">
		      <div className="row">
            <div className="col">
              <div className="menu">
              <Menu />
		        </div>
		      </div>
        <div className="jumbotron over">
          <div className="col">
        </div>
        </div>
       <div className="row">
         <div className="col">
         </div>
		   </div>
		     </div>
		     </div>
		     </div>
		)
	} 
}









export default Overview