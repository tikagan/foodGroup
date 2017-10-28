import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'


class  Pantry extends Component {
	constructor (props) {
	    super(props)

	    this.state = {
        food: [],
        ingredientDB: []
	    };
	}

  componentDidMount() {

    const serverURL = 'http://localhost:3000/'
  
   
    axios.get('api/pantry')
     .then( (response) => {
       let food = []
       for (let i = 0; i < response.data.result.length; i++) {
          food.push({
            key: response.data.result[i].id,
            item: response.data.result[i].name
          })
       }

       this.setState({
        food: food
       });

       let temp = []
       for (let x = 0; x < response.data.all.length; x++) {
         temp.push({
           id: response.data.all[x].id
         })
       }
       this.setState({
        ingredientDB: temp
       });
     })
     .catch(function (error) {
        console.log(error);
     })
  }

  renderFood () {
    return <div>{this.state.food.map(names => <div key={names.key}>{names.item}</div>)}</div>
  }

  doesIngredientExist (input) {
    console.log(input)
    let ingred = this.state.ingredientDB
    console.log(ingred)
    if (ingred.includes(input)) {
      console.log("true")
    } else {
      console.log("false")
    }
  }



		render() {
		return (
			<div className="cutbackground">

		    <Navbar />
       
         <div className="jumbotron listed2">

          <div>
          {this.renderFood(this.state.food)}
          </div>

          {this.doesIngredientExist(this.state.food)}

        </div>

		    </div>
		)
	} 
}

export default Pantry