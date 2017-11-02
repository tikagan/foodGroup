import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Route, BrowserRouter,Link } from 'react-router-dom'



class  PotluckDB extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	list: []
	    	
	    };
	}

  componentDidMount() {
    axios.get('api/potlucks')
    .then( (response) => {
      console.log(response)
      let temp = []
      for (let i = 0; i < response.data.result.length; i++) {
        temp.push({
          id: response.data.result[i].id,
          name: response.data.result[i].name,
          image: response.data.result[i].image,
          description: response.data.result[i].description
        })
      }
      this.setState({
        list: temp
      })
      console.log(this.state)
    })
    .catch(function(error) {
      console.log(error)
    })
  }
	

  renderPotluck () {
    return <div>{this.state.list.map((item, index) => <div key={index}>{item.name}, {item.description} 
      <Link to={{
        pathname: '/PotluckShow',
        state: { id: item.id }
      }} className="btn btn-sm deletegrocerylistbutton">View Potluck</Link>
    </div>)}</div>
     

  }

	render() {
	  return (
		  <div>
        {this.renderPotluck(this.state.list)}
            <Link to="/PotluckCreate"  className="book2" >Create A New Potluck</Link> 
			</div>
  
		)
	} 
}

export default PotluckDB