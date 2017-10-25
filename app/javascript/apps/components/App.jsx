import React, { Component } from 'react'
import myImage from '../../images/foodgroup.png'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Splash from './splash.jsx'
import Overview from './Overview.jsx'
import Groceries from './Grocerylist.jsx'
import Potluck from './Potluck.jsx'
import Pantry from './Pantry.jsx'
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
						<li><Link to="/groceries">groceries</Link></li>
						<li><Link to="/potlucks">Potluck</Link></li>
						<li><Link to="/pantries">Pantry</Link></li>
					</ul>
				  <Route path="/" exact component={Overview}/>
			  	<Route path="/overview" component={Overview}/>
			  	<Route path="/groceries" component={Grocerylist}/>
			  	<Route path="/potlucks" component={Potluck}/>
			  	<Route path="/pantries" component={Pantry}/>

			  </div>
			</Router>
		)
	} 
}

export default App