import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class DatabaseLists extends Component {

  constructor (props) {
			super(props)

      this.state = {
        list: [],
        id: '',
        name: '',
        description: ''
      }
  }

  componentDidMount () {

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
      console.log(this.state)
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  // componentWillUpdate(){
  //   let lists = []
  //   for (let i = 0; i < this.props.lists.length; i++) {
  //     lists.push({
  //       id: this.props.lists[i].id,
  //       name: this.props.lists[i].name,
  //       description: this.props.lists[i].description
  //     })
  //   }
  //   this.setState({
  //     list: lists
  //   })
  // console.log(this.state)
  // }

  render() {
    return (
      <div>
        <div>
          <div key={this.props.lists.id}> <div className="ingrdientname"> {this.props.lists.name}:</div> <div className="listdesc">{this.props.lists.description}</div><button onClick={this.deleteButton.bind(this, this.props.lists.id)}>Delete</button></div>
        </div>
      </div>
    )
  }
}


export default DatabaseLists


// <div>
//         <button onClick={this.showComponentButtonClick}>View Grocery List</button>
//         {this.state.showComponent ?
//            <GrocerylistCreated /> :
//            null
//         }
//       </div>

