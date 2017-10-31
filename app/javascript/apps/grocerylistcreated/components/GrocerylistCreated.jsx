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
        ingredientDB: []
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
            id: response.data.result.id
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
          console.log('>>>>>> ', response.data.result)
          let newGID = {
            id: response.data.result.id
          }
          console.log(newGID)
          
            this.setState({
              food: [...this.state.food, newGID]
            })
            console.log(this.state)
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

  getName = (item) => {
    console.log(this.state.ingredientDB[item.id])
    return this.state.ingredientDB[item.id]["name"]
  };

  renderFood () {
    return (
      <div>{this.state.food.map((item, index) => 
        <div key={index}>{this.getName(item)}</div>
        )}
      </div>
    )
  }


		render() {
		return (
			
		    
		   
		    <div>
		    <p className="grocerylisttitle">Grocery List Name</p>
		  
		    <div>
          {this.renderFood(this.state.food)}
		    </div>
		    
		    <div className="bootform">
<<<<<<< HEAD
		      <div>
            <form className="pantry-form" onSubmit={this.onSubmit}>
            <div className="form-group">
              <input className= "form-control" type="text" placeholder="Item Name" name="newIng" onChange={this.onChange} />
=======
		    <div class="input-group" >
		  		     <input type="text" className="form-control" placeholder="Add item"/>
             <span class="input-group-btn">
               <button class="btn btn-secondary" type="button">submit</button>
            </span>
             
>>>>>>> b050ac1ad06078ee3a7f03ef8e0615211e4a84bc
            </div>
            <div className="form-group"> 
              <input className= "form-control" type="text" placeholder="Item Quantity" name="newAmount" onChange={this.onChange} />
            </div>
            <div className="form-group">
              <input className= "form-control" type="text" placeholder="Unit of Measure" name="newUnit" onChange={this.onChange} />
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