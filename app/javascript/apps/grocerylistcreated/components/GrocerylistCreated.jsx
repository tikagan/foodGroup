import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'

class  GrocerylistCreated extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	
	    };
	   
	}

		render() {
		return (
			<div className="scaleBG">
		    <Navbar />
		    <div className=" jumbotron headed">
		    <p className="grocerylisttitle">Grocery List Name</p>
		    </div>
		    <div className="jumbotron listed2">
		    <ul className="glist">
		      <li>boat</li>
		      <li>fish</li>
		      <li>drum</li>
		      <li>gum</li>
		      <li>butter</li>
		    </ul>
		    </div>
		    <div className="bootform">
		    <div className="input-group" >
             <span className="input-group-btn">
               <button className="btn btn-secondary" type="button">submit</button>
            </span>
              <input type="text" className="form-control" placeholder="Add item"/>
            </div>
            </div>
			
			  
		    </div>
		    
		)
	} 
}









export default GrocerylistCreated