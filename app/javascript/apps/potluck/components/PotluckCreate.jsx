import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'



class  PotluckCreate extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	currentUser: '',
        tempDescription: '',
        tempName: '',
        tempImgURL: ''
	    	
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

  }
	

	render() {
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
      
         
         <Link to="/PotluckShow"  className="book2" >Potluck created</Link> 
			</div>
	 
		)
	} 
}








export default PotluckCreate