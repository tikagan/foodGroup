import React, { Component } from 'react'
import myImage from '../../images/foodgroup.png'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Splash from './splash.jsx'
import Overview from './Overview.jsx'
import Grocerylist from './Grocerylist.jsx'
import Potluck from './Potluck.jsx'
import Pantry from './Pantry.jsx'
import grocerylistcreated from './GrocerylistCreated.jsx'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

class App extends Component {
	constructor (props) {
    super(props)
    
    this.state = {
    	
    };
	}

	render() {
		return (
			<Router>
				<div className="intheway">
					
				  <Route path="/" exact component={Overview}/>
			  	<Route path="/overview" component={Overview}/>
			  	<Route path="/groceries" component={Grocerylist}/>
			  	<Route path="/potlucks" component={Potluck}/>
			  	<Route path="/pantries" component={Pantry}/>
			  	<Route path="/GrocerylistCreated" component={grocerylistcreated}/>

			  </div>
			</Router>
		)
	} 
}

export default App