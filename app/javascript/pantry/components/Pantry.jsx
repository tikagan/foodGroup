import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'
import search from './search.jsx'

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
		 
			<Search />
			<div>
			<h1>Pantries</h1>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th colspan="3"></th>
    </tr>
  </thead>

  <tbody>
  
      <tr>
        
      </tr>
  
  </tbody>
</table>

<br/>


</div>
			  

		     </div>
		)
	} 
}









export default Pantry