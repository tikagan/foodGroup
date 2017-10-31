import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter,Link } from 'react-router-dom'
import Search from '../../search/search.jsx'

class  Modal extends Component {

  constructor (props) {
      super(props)
      
      this.state = {

        
      };
     
  }

  render() {
      return (
        <div className="modalform">
          
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Recipe Search</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <Search /> 
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
        
        </div>
      ) 
  }
}


export default Modal