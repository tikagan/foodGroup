import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'


class  RecipeSearched extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	showCompnent: false.

	    	
	    };
	    this._onButtonClick = this._onButtonClick.bind(this);
	   
	}
	_onButtonClick() {
		this.set.State({
			showCompnent: !this.state.showCompnent
		});
	}

		render() {
		  return (
		  	<div className="potluckBG">
		  	  <button onClick={this._onButtonClick}>button</button>
        {this.state.showComponent ?
         :
           null
        }
			  <Navbar />
			</div>
			);
		}
	}

export default RecipeSearched
