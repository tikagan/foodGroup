import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'
import PotluckDB from '../../potluck/components/PotluckDB.jsx'



class  Potluck extends Component {

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
        <PotluckDB />
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
              <div className="form-group">
              <label for="exampleInputPassword1">Recipe</label>
              <input  className="form-control" placeholder="Add recipe"/>
              </div>
              <div className="form-group">
              <label for="exampleInputPassword1">Invite Users</label>
              <input  className="form-control" placeholder="Invite Friends"/>
              </div>
            <button  className="btn btn-primary">Submit</button>
          </form>
         </div>
      
         
         <Link to="/PotluckCreated"  className="book2" >Potluck created</Link> 
			</div>
	 
		)
	} 
}








export default Potluck