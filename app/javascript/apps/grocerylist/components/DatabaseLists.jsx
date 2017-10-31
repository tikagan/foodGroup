import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import GrocerylistCreated from '../../grocerylistcreated/components/GroceryListCreated.jsx'

class DatabaseLists extends Component {

  constructor (props) {
			super(props)

      this.state = {
        list: [],
        id: '',
        name: '',
        description: '',
        showComponent: false
      }
      this.showList = this.showList.bind(this);
  }

  showList = () => {
    this.setState({
      showComponent: !this.state.showComponent
    });
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
          <div key={this.props.lists.id}> <div className="ingrdientname"> {this.props.lists.name}:</div> <div className="listdesc">{this.props.lists.description}</div>
            <div>
              <button onClick={this.showList}>Show Grocery List</button>
                {this.state.showComponent ?
                  <GrocerylistCreated /> :
                  null
                }
              </div> 
          <div><button onClick={this.deleteButton}>Delete</button></div></div>
        </div>
      </div>
    )
  }
}


export default DatabaseLists
