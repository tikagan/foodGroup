import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter, Link, Redirect } from 'react-router-dom'



class  PotluckCreate extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	currentUser: '',
        tempDescription: '',
        tempName: '',
        tempImgURL: '',
        passID: '',
        redirectToNewPage: false
	    	
	    };
	}

  componentDidMount(){
    axios.get('api/potlucks')
    .then( (response) => {
      console.log(response)
      this.setState({
        currentUser: response.data.user.id
      })
      console.log(this.state)
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state)
  }

  onSubmit = (e) => {
    e.preventDefault()
    axios.post('api/potlucks', {
        name: this.state.tempName,
        description: this.state.tempDescription,
        image: this.state.tempImgURL,
        creator_id: this.state.currentUser
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
    .then((response) => {
      console.log(response)

      this.setState({ 
        passID: response.data.result.id,
        redirectToNewPage: true
      })
      console.log("still on create page", this.state)
    })
    .catch(function(error) {
      console.log(error)
    })
  }
	

	render() {

    if (this.state.redirectToNewPage) {
      let passID = this.state.passID
      return (
         <Redirect to={{
           pathname: "/PotluckShow",
           state: { id: passID }
          }} />
      )
    }

	  return (
		  <div className="potluckBG">
			  <Navbar />

		    <div className="bootform2" >
		      <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label >Potluck Name</label>
              <input onChange={this.onChange} name="tempName" className="form-control"  placeholder="Add Potluck Name"/>
              </div>
              <div className="form-group">
              <label for="exampleInputEmail1">Add Image</label>
              <input onChange={this.onChange} name="tempImgURL" className="form-control"  placeholder="Add Image"/>
              </div>
              <div className="form-group">
              <label for="exampleInputEmail1">Description</label>
              <input onChange={this.onChange} name="tempDescription" className="form-control" placeholder="Add Description"/>
              </div>
            <button  className="btn btn-primary">Submit</button>
          </form>
         </div>
      
         
         
			</div>
	 
		)
	} 
}
              







export default PotluckCreate