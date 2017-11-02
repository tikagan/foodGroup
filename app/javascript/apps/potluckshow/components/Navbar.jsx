import React, { Component } from 'react'
import myImage from '../../images/foodgroup.png';
import Modal from 'react-modal'
import Search from '../../search/PotluckSearch.jsx'

const customStyles = {

  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    overflow              : 'scroll',
    WebkitOverflowScrolling    : 'auto',
    height:          '500px',
    backgroundColor:'rgba(0,0,0,0.7)'
  

   
  }
};


class  Navbar extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	modalIsOpen: false
	    	
	    };
	this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
	   
	}

	openModal() {
      this.setState({modalIsOpen: true});
  }
 
    afterOpenModal() {
    // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#ffffff';

  }
 
    closeModal() {
      this.setState({modalIsOpen: false});
  }


	render() {
		return (
		  <div >
	        <nav className="navbar navbar-default">
              <div className="container-fluid">
              <div className="navbar-header">
              <a className="navbar-brand" href="#" />
              <img className="Brand" src={myImage} />
              <button className="btn  rsearch" onClick={this.openModal}>Recipe Search</button>
              <div>
              <Modal 
                     isOpen={this.state.modalIsOpen}
                     onAfterOpen={this.afterOpenModal}
                     onRequestClose={this.closeModal}
                     style={customStyles}
                     contentLabel="Example Modal"
                     >
 
                    <h2 ref={subtitle => this.subtitle = subtitle}>Recipe Search</h2>
                    <Search />
                    </Modal>
                    </div>
              </div>
             </div>
            </nav>

        </div>
		)
	} 
}









export default Navbar