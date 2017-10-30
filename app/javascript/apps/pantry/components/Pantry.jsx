import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'


class  Pantry extends Component {
<<<<<<< HEAD
	constructor (props) {
	    super(props)
      this.getPantry = this.getPantry.bind(this)

	    this.state = {
        food: [],
        ingredientDB: [],
        current_user: [],
        newIng: '',
        newAmount: '',
        newUnit: '',
        test: "",
	    };
	}
=======
  constructor (props) {
      super(props)

      this.state = {
        food: []
      };
  }
>>>>>>> be36f2a166ecfd4c0ae52beb60fce5e046952eb6

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
           id: response.data.all[x].id,
           name: response.data.all[x].name
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

  deleteButton = (data) => {
    console.log("deleteButton data", data)
    let ownPantry = this.state.current_user
    // this.names.key = 
    axios.delete('api/pantry', {params: {
        ingredient_id: data.key,
      }
    }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
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
            food: food
          });
         })
        })
        .catch(function (error) {
        console.log(error);
        })
  }

  renderFood () {
    return <div>{this.state.food.map((names, index) => <div key={index} onClick={this.deleteButton.bind(this, names)}>{names.item}</div>)}</div>
  }

  getPantry = () => {
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
			<div className="pantryBG">
        <Navbar />
          <div className="jumbotron container-fluid listed2">

          <div>
          {this.renderFood(this.state.food)}
          </div>

        </div>
        <div>
          <form onSubmit={this.onSubmit}>
            <input type="text" name="newIng" onChange={this.onChange} />
            <input type="text" name="newAmount" onChange={this.onChange} />
            <input type="text" name="newUnit" onChange={this.onChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
        

        </div>


 


		   
		)
  }
	} 

export default Pantry