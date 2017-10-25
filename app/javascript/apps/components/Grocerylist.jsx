import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
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
				<div id="container">
				<div className="groupedforms">
				    <div className="form1">
				    <div className="col-lg-6 fig">
             <div className="input-group">
               <input typeName="text" class="form-control" placeholder="List Name" />
               <span className="input-group-btn">
               <button className="btn btn-default" type="button">Go!</button>
               </span>
            </div>
            </div>
            </div>
            <div className="form2">
             <div className="col-lg-6 fig">
             <div className="input-group">
               <input typeName="text" class="form-control" placeholder=" List Description" />
               <span className="input-group-btn">
               <button className="btn btn-default" type="button">Go!</button>
               </span>
            </div>
            </div>
            </div>
            <div className="form3">
             <div className="col-lg-6 fig">
             <div className="input-group">
               <input typeName="text" class="form-control" placeholder="Add Item" />
               <span className="input-group-btn">
               <button className="btn btn-default" type="button">Go!</button>
               </span>
            </div>
            </div>
            </div>
              <div className="form3">
             <div className="col-lg-6 fig">
             <div className="input-group">
               <input typeName="text" class="form-control" placeholder="Invite Users" />
               <span className="input-group-btn">
               <button className="btn btn-default" type="button">Go!</button>
               </span>
            </div>
            </div>
            </div>
            </div>
            </div>
             <Link to="/GrocerylistCreated"  className="book2" >grocerylist created</Link> 
			
		       
			</div>
		)
	} 
}









export default Grocerylist