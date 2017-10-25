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
			<div className="cutbackground">
				<Navbar />
				<form>
				  <label>
				  List Name: 
				  <input type="text" name="name"/>
				  </label>
				   <label>
				  Description: 
				  <input type="text" name="description"/>
				  </label>
				  <label>
				  add item: 
				  <input type="text" name="add item"/>
				  </label>
				   <input type="submit" value="Submit" />
				  </form>
         <Link to="/GrocerylistCreated"  className="book2" >grocerylist created</Link> 
			</div>
		)
	} 
}







export default Grocerylist