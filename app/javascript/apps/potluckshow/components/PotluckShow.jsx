import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'

class  PotluckCreated extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	
	    };
	   
	}

	
            

		render() {
		  return (
			  <div className="potluckcreatedBG">
		      <Navbar />
		       <h3 className="potluckname"> Potluck Name</h3>
		       
		        <div className="container">
		        <div className="row">

		          <div className="col-sm-3">
		             <div className="jumbotron listed3">
		             <p>image</p>
		             </div>
		             <div className="jumbotron listed4">
		             <p>description</p>
		             </div>
		          </div>
		         <div className="col-sm">
		         <div className="jumbotron listed5">
		         <p className="rectext">recipie</p>
		         </div>
		        
		          <div className="jumbotron listed6">
		         <p className="rectext">comments</p>
		         </div>
		           <form>
              <div className="form-group invite ">
              <label for="exampleInputPassword1">Invite Users</label>
              <input  className="form-control invite2" placeholder="Invite Friends"/>
              </div>
              <button  className="btn btn-primary">Submit</button>
              </form>
               <form className= "rep">
                   <div className="form-group recipegroup">
                     <label for="exampleInputPassword1">Recipe</label>
                     <input  className="form-control recipeinput" placeholder="Add recipe"/>
                   </div>
                    <button  className="btn btn-primary">Submit</button>
                </form>   

		         <form className="commentform">
										<textarea className="potluckcomment" placeholder="Comment" />
									
										<button type="submit" className="btn btcomment"> Submit</button>
									</form>
		         
		         </div>
		         </div>
		         </div>

		     </div>
		    
		)
	} 
}








export default PotluckCreated