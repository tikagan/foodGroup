import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import { Route, BrowserRouter,Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class  Grocerylist extends Component {

	constructor (props) {
			super(props)

			this.state = {
        list: "",
        description: ""
			};
  }
  
  onChange = (e) => {

    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state)
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
              <input  className="form-control" name="list" placeholder="Add List Name" onChange={this.onChange}/>
    
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Description</label>
              <input  className="form-control" name="description" placeholder="Add Description" onChange={this.onChange}/>
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