import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class  Menu extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	
	    };
	   
	}

	render() {
		return (
			<div >
			  
			
			  <Link to="/potlucks"  className="book2" >Create Potluck</Link> <br/>
			  <Link to="/groceries" className="book1">Create List</Link>
			  <Link to="/pantries" className="book3">Pantry</Link>
			 
			

			  <form>
			    <textarea rows="2" cols="50" defaultValue="Input your food items here" />
               </form>

		     </div>
		)
	}
}









export default Menu