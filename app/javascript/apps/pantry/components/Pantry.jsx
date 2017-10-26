import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'


class  Pantry extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	test: ''
	    };
	}

  componentDidMount() {
    const serverURL = 'http://localhost:3000/'
    axios.get('api/pantry')
     .then( (response) => {
       console.log(response)
       this.setState({
         test: response.data.ingredient_id
       });
      console.log(response);
     })
     .catch(function (error) {
    console.log(error);
     })
  }

		render() {
		return (
			<div className="cutbackground">
		    <Navbar />
        <h1>  {this.state.test}</h1>
		    </div>
		)
	} 
}









export default Pantry