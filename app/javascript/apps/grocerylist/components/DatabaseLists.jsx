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

  deleteButton = (e) => {
    let test = this.props.lists.id
    e.preventDefault()
    this.props.deleter(test)
  }

  render() {
    return (
      <div>
        <div>
          <div key={this.props.lists.id}> <div className="ingrdientname"> {this.props.lists.name}:</div> <div className="listdesc">{this.props.lists.description}</div><button onClick={this.deleteButton}>Delete</button></div>
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

