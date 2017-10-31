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
			
		    
		   
		    <div>
		    <p className="grocerylisttitle">Grocery List Name</p>
		  
		    <div>
		    <ul className="glist">
		      <li>boat</li>
		      <li>fish</li>
		      <li>drum</li>
		      <li>gum</li>
		      <li>butter</li>
		    </ul>
		    </div>
		    
		    <div className="bootform">
		    <div class="input-group" >
		     <input type="text" className="form-control" placeholder="Add item"/>
             <span class="input-group-btn">
               <button class="btn btn-secondary" type="button">submit</button>
            </span>
             
            </div>
            </div>
			
			
		    </div>
		    
		)
	} 
}









export default GrocerylistCreated