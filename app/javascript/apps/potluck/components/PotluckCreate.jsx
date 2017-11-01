import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'



class  PotluckCreate extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	
	    	
	    };
	    

	   
	}
	

	render() {
	  return (
		  <div className="potluckBG">
			  <Navbar />

		    <div className="bootform2" >
		      <form>
            <div className="form-group">
              <label >Potluck Name</label>
              <input  className="form-control"  placeholder="Add Potluck Name"/>
              </div>
              <div className="form-group">
              <label for="exampleInputEmail1">Add Image</label>
              <input  className="form-control"  placeholder="Add Image"/>
              </div>
              <div className="form-group">
              <label for="exampleInputEmail1">Description</label>
              <input  className="form-control" placeholder="Add Description"/>
              </div>
              
            <button  className="btn btn-primary">Submit</button>
          </form>
         </div>
      
         
         <Link to="/PotluckShow"  className="book2" >Potluck created</Link> 
			</div>
	 
		)
	} 
}
              







export default PotluckCreate