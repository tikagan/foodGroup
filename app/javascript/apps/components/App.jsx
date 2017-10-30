import React, { Component } from 'react'
import myImage from '../images/foodgroup.png'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Splash from '../splash/components/Splash.jsx'
import Overview from './Overview.jsx'
import Groceries from '../grocerylist/components/Grocerylist.jsx'
import Potluck from '../potluck/components/Potluck.jsx'
import Pantry from '../pantry/components/Pantry.jsx'
import PotluckCreated from '../potluckcreated/components/PotluckCreated.jsx'
import Search from './search/search.jsx'
import grocerylistcreated from '../grocerylistcreated/components/GrocerylistCreated.jsx'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

class App extends Component {
	constructor (props) {
    super(props)
<<<<<<< HEAD

    this.state = {

=======

    this.state = {


>>>>>>> master
    };
	}

	render() {
		return (
			<Router>
				<div className="intheway">
<<<<<<< HEAD

				 <Route path="/" exact component={Overview}/>
=======

				<Route path="/" exact component={Overview}/>
>>>>>>> master
			  	<Route path="/overview" component={Overview}/>
			  	<Route path="/groceries" component={Groceries}/>
			  	<Route path="/potlucks" component={Potluck}/>
			  	<Route path="/pantry" component={Pantry}/>
			  	<Route path="/search" component={Search}/>
			  	<Route path="/GrocerylistCreated" component={grocerylistcreated}/>
			  	<Route path="/PotluckCreated" component={PotluckCreated}/>

			  </div>
			</Router>

		)
	}
}

export default App
