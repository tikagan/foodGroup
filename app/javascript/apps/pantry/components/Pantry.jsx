import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'


class  Pantry extends Component {
	constructor (props) {
	    super(props)
      this.doesIngredientExist = this.doesIngredientExist.bind(this)

	    this.state = {
        food: [],
        ingredientDB: [],
        current_user: [],
        newIng: "",
        newAmount: "",
        newUnit: ""
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
        food: food,
        current_user: response.data.user.id
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
       console.log(this.state)
     })
     .catch(function (error) {
        console.log(error);
     })
  }

  renderFood () {
    return <div>{this.state.food.map(names => <div key={names.key}>{names.item}</div>)}</div>
  }






  doesIngredientExist = (data) => {
    let checker = this.state.ingredientDB

    if (checker.hasOwnProperty(data)) {
      console.log("true")
    } else {
      console.log("false")
    }
  }

  onChange = (e) => {
  // Because we named the inputs to match their corresponding values in state, it's
  // super easy to update the state
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { newIng } = this.state;

        axios.post('/api/ingredients', { newIng })
          .then((result) => {
            console.log(result)
          });
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

          <form onSubmit={this.onSubmit}>
            <input type="text" name="newIng" value={newIng} onChange={this.onChange} />
            <input type="text" name="newAmount" value={newAmount} onChange={this.onChange} />
            <input type="text" name="email" value={email} onChange={this.onChange} />
            <button type="submit">Submit</button>
          </form>
        );

		    </div>
		)
	} 
}

export default Pantry