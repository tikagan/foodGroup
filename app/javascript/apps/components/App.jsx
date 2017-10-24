import React, { Component } from 'react'
import myImage from '../../images/foodgroup.png'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Splash from './splash.jsx'
import Overview from './Overview.jsx'
import Grocerylist from './Grocerylist.jsx'
import Potluck from './Potluck.jsx'
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
					<ul>
						<li><Link to="/overview">Overview</Link></li>
						<li><Link to="/grocery-list">Grocery List</Link></li>
						<li><Link to="/potluck">Potluck</Link></li>
					</ul>
				  <Route path="/" exact component={Splash}/>
			  	<Route path="/overview" component={Overview}/>
			  	<Route path="/grocery-list" component={Grocerylist}/>
			  	<Route path="/potluck" component={Potluck}/>
			  </div>
			</Router>
		)
	} 
}

export default App