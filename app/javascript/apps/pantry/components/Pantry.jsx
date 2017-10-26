import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'


class  Pantry extends Component {
	constructor (props) {
	    super(props)

	    this.state = {
        food: []
	    };
	}

  componentDidMount() {

    const serverURL = 'http://localhost:3000/'
  
   
    axios.get('api/pantry')
     .then( (response) => {
       let food = []
       for (let i = 0; i < response.data.length; i++) {
          food.push({
            key: response.data[i].id,
            item: response.data[i].name
          })
       }
       this.setState({
        food: food
       });
       console.log(this.state.food)
     })
     .catch(function (error) {
        console.log(error);
     })
  }

  renderFood () {
    return <div>{this.state.food.map(names => <div key={names.id}>{names.item}</div>)}</div>
  }


		render() {
		return (
			<div className="cutbackground">

		    <Navbar />
       
         <div className="jumbotron listed2">

          <div>
          {this.renderFood(this.state.food)}
          </div>

        </div>
		    </div>
		)
	} 
}
export default Pantry