import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import { Route, BrowserRouter,Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import GrocerylistCreated from '../../grocerylistcreated/components/GrocerylistCreated.jsx'
import DatabaseLists from './DatabaseLists'


class  Grocerylist extends Component {

	constructor (props) {
			super(props)

			this.state = {
        list: [],
        user: '',
        tempName: '',
        tempDescription: '',
        showComponent: false,
        selectedID: '',
        selectedName: ''
			};
    this.showComponentButtonClick = this.showComponentButtonClick.bind(this);
  }

  componentDidMount () {
    axios.get('api/groceries', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
    .then((response) => {
      let lists = []
      for (let i = 0; i < response.data.result.length; i++) {
        lists.push({
          id: response.data.result[i].id,
          name: response.data.result[i].name,
          description: response.data.result[i].description
        })
      }
      this.setState({
        list: lists,
        user: response.data.user.id
      })
    })
    .catch(function(error) {
      console.log(error)
    })
  }
  
  onChange = (e) => {

    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault()
    let newListName = this.state.tempName
    let newDescription = this.state.tempDescription
    let user = this.state.user
    axios.post('api/groceries', {
      user_id: user,
      name: newListName,
      description: newDescription
      }, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
      })
    .then((response) => {
      console.log(response)
      let lists = []
      for (let i = 0; i < response.data.result.length; i++) {
        lists.push({
          id: response.data.result[i].id,
          name: response.data.result[i].name,
          description: response.data.result[i].description
        })
      }
      this.setState({
        list: lists
      })
      console.log(this.state)
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  deleteButton = (data) => {
    axios.delete('api/groceries/' + data, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
    .then((response) => {
      let lists = []
      for (let i = 0; i < response.data.result.length; i++) {
        lists.push({
          id: response.data.result[i].id,
          name: response.data.result[i].name,
          description: response.data.result[i].description
        })
      }
      this.setState({
        list: lists
      })
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  renderLists () {
    return <div>
    
    {this.state.list.map((names, index)=> <div key={names.id}> <div className="ingrdientname">{names.name}:</div> 
      <div className="listdesc">{names.description}<button className="btn btn-sm listButton" onClick={this.deleteButton.bind(this, names.id)}>Delete</button></div>
      </div>)}</div>

  deleteButton = (data) => {
    console.log(data)
    axios.delete('api/groceries/' + data, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
    .then((response) => {
      let lists = []
      for (let i = 0; i < response.data.result.length; i++) {
        lists.push({
          id: response.data.result[i].id,
          name: response.data.result[i].name,
          description: response.data.result[i].description
        })
      }
      this.setState({
        list: lists
      })
      console.log(this.state)
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  renderLists () {
    return (
    <div className="doesItShow">
  
      {this.state.list.map((names, index)=> <div key={index}><DatabaseLists lists={names} deleter={this.deleteButton} /></div>)}
    </div>
    )
  }

	render() {
	  return (
		  <div className="scaleBG">
			  <Navbar />
        <div className="jumbotron listed7">
         <div className="grocerylistsA">
            {this.renderLists(this.state.list)}
          </div>
		    <div className="bootform2" >
		      <form className="growform" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1">List Name</label>
              <input  className="form-control" name="tempName" placeholder="Add List Name" onChange={this.onChange}/>
    
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Description</label>
              <input  className="form-control" name="tempDescription" placeholder="Add Description" onChange={this.onChange}/>
            </div>
           
            <button  className="btn btn-primary">Submit</button>
          </form>
          </div>
         
         </div>
         
			</div>
		)
	} 
}


export default Grocerylist