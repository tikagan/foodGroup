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
    console.log(this.props.lists)
    let lists = []
    for (let i = 0; i < this.props.lists.length; i++) {
      lists.push({
        id: this.props.lists[i].id,
        name: this.props.lists[i].name,
        description: this.props.lists[i].description
      })
    }
    this.setState({
      list: lists
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

  render() {
    return (
      <div>
        <div>
          {this.state.list.map((names, index)=> <div key={names.id}> <div className="ingrdientname"> {names.name}:</div> <div className="listdesc">{names.description}</div><button onClick={this.deleteButton.bind(this, names.id)}>Delete</button></div>)}
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


    <div>
      {this.state.list.map((names, index)=> <div key={names.id}> <div className="ingrdientname"> {names.name}:</div> <div className="listdesc">{names.description}</div><button onClick={this.deleteButton.bind(this, names.id)}>Delete</button></div>)}
    </div>