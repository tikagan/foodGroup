import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'

class  GrocerylistCreated extends Component {

	constructor (props) {
	    super(props)

	    this.state = {
        food: [],
        newIng: '',
        newAmount: '',
        newUnit: '',
        ingredientDB: [],
        tempID: ''
	    };

	}

  componentDidMount(){
    let id = this.props.id
    console.log(id)
    axios.get('api/grocery_ingredients/', {
      params: {
        grocery_id: id
      }
    })
    .then( (response) => {
      console.log(response)
      let food = []
        for (let i = 0; i < response.data.result.length; i++) {
          food.push({
            key: response.data.result[i].id,
            id: response.data.result[i].ingredient_id
          })
        }
      let temp = {}
      for (let x = 0; x < response.data.all.length; x++) {
        temp[response.data.all[x].id] = {
          id: response.data.all[x].id,
          name: response.data.all[x].name
        };
       }
      console.log(temp)

        this.setState({
          food: food,
          ingredientDB: temp
        });
    })
    .catch(function(error) {
      console.log(error)
    })
  }


onChange = (e) => {
  // Because we named the inputs to match their corresponding values in state, it's
  // super easy to update the state
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state)
  }

onSubmit = (e) => {
    e.preventDefault();

    let userIng = this.state.newIng
    console.log(this.state)
    let groceryList= this.props.id

    let checker = this.state.ingredientDB
    let checkerName = []
    Object.keys(checker).forEach(function(key) {
      checkerName.push(checker[key].name)
    })
    console.log(checkerName)

    if (checkerName.includes(userIng)) {
      let newObj = {}
      Object.keys(checker).forEach(function(key) {
        if (checker[key].name == userIng) {
          newObj = checker[key]
        }
      })

      console.log("true")
      console.log(newObj)
      axios.post('api/grocery_ingredients', {
        ingredient_id: newObj.id,
        grocery_id: groceryList,
        quantity: 10
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then( (response) => {
        console.log("ingred exists post to server", response)
        const setState = this.setState.bind(this)
        let newGID = {
            key: response.data.result.id,
            id: response.data.result.ingredient_id
          }
          console.log(newGID)

            this.setState({
              food: [...this.state.food, newGID]
            })
      })
      .catch(function (error) {
      console.log(error);
      })
    } else {
      console.log("posting")
      axios.post('api/ingredients', {
        name: userIng
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then( (response) => {
        console.log(response.data.result.id)
          axios.post('api/grocery_ingredients', {
            ingredient_id: response.data.result.id,
            grocery_id: groceryList,
            quantity: 10
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then( (responses) => {
          console.log("last", responses)
          console.log("here")
          const setState = this.setState.bind(this)
          let newGID = {
            key: response.data.result[i].id,
            id: response.data.result.id
          }
          console.log(newGID)

          let temp = {}
          for (let x = 0; x < response.data.all.length; x++) {
            temp[response.data.all[x].id] = {
              id: response.data.all[x].id,
              name: response.data.all[x].name
            };
          }
          console.log(temp)

            this.setState({
              food: [...this.state.food, newGID],
              ingredientDB: temp
            })
            })

        .catch(function (error) {
        console.log(error);
        })
      })

       .catch(function (error) {
        console.log(error);
      })
    }
   }

   deleteButton = (data) => {
    console.log("deleteButton data", data)
    let ownPantry = this.state.current_user
    let toDelete = data.id
    console.log(toDelete)
    // this.names.key =
    axios.delete('api/grocery_ingredients/' + data.key, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
    .then( (response) => {
        console.log("here")
        let thisList = this.props.id
        const setState = this.setState.bind(this)
        axios.get('api/grocery_ingredients', {
          params: {
            grocery_id: thisList
          }
        })
        .then( (response) => {
        let food = []
        for (let i = 0; i < response.data.result.length; i++) {
          food.push({
            key: response.data.result[i].id,
            id: response.data.result[i].ingredient_id
          })
          }
          this.setState({
            food: food
          });
         })
        })
        .catch(function (error) {
        console.log(error);
        })
  }

  getName = (item) => {
    console.log(item)
    // console.log(this.state.ingredientDB[item.id])
    return this.state.ingredientDB[item.id]["name"]
  };

  renderFood () {
    return (
      <div>{this.state.food.map((item, index) =>
        <div className="divlength" key={index}>{this.getName(item)}
        <div><button className="btn btn-sm deletegrocerylistbutton" onClick={this.deleteButton.bind(this, item)}>Delete Item</button></div>
        </div>
        )}
      </div>
    )
  }

		render() {
		return (
		    <div>
        <br/>
        <hr/>
		    <div>
          {this.renderFood(this.state.food)}
		    </div>

		    <div className="bootform">
		      <div>
            <form className="pantry-form" onSubmit={this.onSubmit}>
            <div className="form-group">
              <input className= "form-control" type="text" placeholder="Item Name" name="newIng" onChange={this.onChange} />
            </div>
            <button className="book4" type="submit">Submit</button>
            </form>
        </div>
			</div>

		    </div>

		)
	}
}

export default GrocerylistCreated