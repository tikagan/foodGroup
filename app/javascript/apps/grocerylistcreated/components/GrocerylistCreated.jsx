import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'

class  GrocerylistCreated extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
        food: '',
        current_user: '',
        newIng: '',
        newAmount: '',
        newUnit: ''
	    };
	   
	}

  componentDidMount(){
    let id = this.props.id
    console.log(id)
    axios.get('api/grocery_ingredients/' + 31)
    .then( (response) => {
      console.log(response)
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
    let pantryUser = this.state.current_user

    let checker = this.state.ingredientDB
    let checkerName = []
    checker.forEach(function(item){
      checkerName.push(item.name)
    })
    console.log(checkerName)

    if (checkerName.includes(userIng)) {
      let obj = checker.find(o => o.name === userIng);

      console.log("true")
      console.log(obj)
      axios.post('/api/pantry', {
        ingredient_id: obj.id,
        user_id: pantryUser,
        quantity: 10,
        unit: 'grams'
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then( (response) => {
        console.log("here")
        const setState = this.setState.bind(this)
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

         })

        .catch(function (error) {
        console.log(error);
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
          axios.post('/api/pantry', {
            ingredient_id: response.data.result.id,
            user_id: pantryUser,
            quantity: 10,
            unit: 'grams'
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then( (responses) => {
          console.log("here")
          const setState = this.setState.bind(this)
          axios.get('api/pantry')
          .then( (responses) => {
          console.log("NEWWWWWWWWWWWWWWW", responses.data.result)
          let food = []
          for (let i = 0; i < responses.data.result.length; i++) {
            food.push({
              key: responses.data.result[i].id,
              item: responses.data.result[i].name
            })
          }
            this.setState({
              food: food
            });
            console.log(this.state)
         })

        .catch(function (error) {
        console.log(error);
        })
      })
      })
        
       .catch(function (error) {
        console.log(error);
      })
    }
   }


		render() {
		return (
			
		    
		   
		    <div>
		    <p className="grocerylisttitle">Grocery List Name</p>
		  
		    <div>
		    <ul className="glist">
		      <li>boat</li>
		      <li>fish</li>
		      <li>drum</li>
		      <li>gum</li>
		      <li>butter</li>
		    </ul>
		    </div>
		    
		    <div className="bootform">
		    <div class="input-group" >
		  		     <input type="text" className="form-control" placeholder="Add item"/>
             <span class="input-group-btn">
               <button class="btn btn-secondary" type="button">submit</button>
            </span>
             
            </div>
            <button className="book4" type="submit">Submit</button>


            </div>
			
			
		    </div>
		    
		)
	} 
}









export default GrocerylistCreated