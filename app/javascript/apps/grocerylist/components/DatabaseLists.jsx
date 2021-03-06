import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import GrocerylistCreated from '../../grocerylistcreated/components/GrocerylistCreated.jsx'

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
      showComponent: !this.state.showComponent,
      id: this.props.lists.id
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
              <button type="button" className="btn btn-sm showgrocerylistbutton" onClick={this.showList}>Show</button>
                {this.state.showComponent ?
                  <GrocerylistCreated id={this.state.id}/> :
                  null
                }
              </div> 
          <div><button type="button" className=" btn btn-sm deletegrocerylistbutton" onClick={this.deleteButton}>Delete</button></div></div>
          <div className="emptydiv"></div>
        </div>
      </div>
    )
  }
}


export default DatabaseLists
