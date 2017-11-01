import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'
import PotluckDB from '../potluck/components/PotluckDB.jsx'


class  Potluck extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	
	    };

	   
	}

	render() {
	
		return (
			<div className="potluckcreatedBG">
              <Navbar />

        <div className="jumbotron listedpotluck ">
          <h3 className="potlucktitle"> Current Potlucks </h3>

          <PotluckDB />
        </div>
		    </div>
		)
	} 
}









export default Potluck