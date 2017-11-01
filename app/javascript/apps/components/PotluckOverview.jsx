import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'
import PotluckDB from '/Users/ali/lighthouse/projects/FoodGroup/app/javascript/apps/potluck/components/PotluckDB.jsx'


class  Potluck extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	
	    };

	   
	}

	render() {
	
		return (
			<div className="cutbackground">
		    <Navbar />

        <div>
          <PotluckDB />
        </div>
		    </div>
		)
	} 
}









export default Potluck