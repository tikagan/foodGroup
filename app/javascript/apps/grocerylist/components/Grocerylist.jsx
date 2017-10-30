import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import { Route, BrowserRouter,Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class  Grocerylist extends Component {

	constructor (props) {
			super(props)

			this.state = {

			};


	}

	render() {
	  return (
		  <div className="scaleBG">
			  <Navbar />
        <div className="jumbotron listed7">
		    <div className="bootform2" >
		      <form>
            <div className="form-group">
              <label for="exampleInputEmail1">List Name</label>
              <input  className="form-control"  placeholder="Add List Name"/>
    
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Description</label>
              <input  className="form-control" placeholder="Add Description"/>
            </div>
           
            <button  className="btn btn-primary">Submit</button>
          </form>
          </div>
         </div>
         <Link to="/GrocerylistCreated"  className="book2" >grocerylist created</Link> 
			</div>
		)
	} 
}


export default Grocerylist