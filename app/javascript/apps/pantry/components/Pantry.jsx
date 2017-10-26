import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'


class  Pantry extends Component {

	constructor (props) {
	    super(props)

	    this.state = {
	    	ingredients: {

        }
	    };
	}

  componentDidMount() {

    const serverURL = 'http://localhost:3000/'
  
   
    axios.get('api/pantries/2')
     .then( (response) => {
       let food = []
       for (let i = 0; i <= response.data.length; i++) {
          console.log(response.data[i].ingredient_id)
          food.push(response.data[i].ingredient_id)
       }
       this.setState({
        food: food
       });

     })
     .catch(function (error) {
    console.log(error);
     })
  }

  ingredienttNaming() {

    

  }

		render() {
		return (
			<div className="cutbackground">
		    <Navbar />
       
         <div className="jumbotron listed2">
          <ul>  {this.state.ingredients.first}</ul>
        </div>
		    </div>
		)
	} 
}









export default Pantry