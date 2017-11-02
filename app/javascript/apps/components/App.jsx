import React, { Component } from 'react'
import myImage from '../images/foodgroup.png'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Splash from '../splash/components/Splash.jsx'
import Overview from './Overview.jsx'
import Grocerylist from '../grocerylist/components/Grocerylist.jsx'
import PotluckOverview from './PotluckOverview.jsx'
import PotluckCreate from '../potluck/components/PotluckCreate.jsx'
import Pantry from '../pantry/components/Pantry.jsx'
import PotluckShow from '../potluckshow/components/PotluckShow.jsx'

import Search from '../search/Search.jsx'
import PotluckSearch from '../search/PotluckSearch.jsx'

import GrocerylistCreated from '../grocerylistcreated/components/GrocerylistCreated.jsx'
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
			  	<Route path="/potlucks" component={PotluckOverview}/>
          <Route path="/potluckCreate" component={PotluckCreate} />
			  	<Route path="/pantry" component={Pantry}/>
			  	<Route path="/search" component={Search}/>
					<Route path="/potlucksearch" component={PotluckSearch}/>
			  	<Route path="/GrocerylistCreated" component={GrocerylistCreated}/>
			  	<Route path="/PotluckShow" component={PotluckShow}/>




			  </div>
			</Router>

		)
	}
}

export default App
