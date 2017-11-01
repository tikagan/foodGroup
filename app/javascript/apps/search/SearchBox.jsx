import React, { Component } from 'react'

class SearchBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      diet: '',
      allergy: '',
      course: ''
    }
  }

    handleChange = (event) => {
      this.setState({query: event.target.value});
    }

    handleDiet = (event) => {
      this.setState({diet: event.target.value});
    }

    handleAllergy = (event) => {
      this.setState({allergy: event.target.value});
    }

    handleCourse = (event) => {
      this.setState({course: event.target.value});
    }

    render(){
        return (
            <div>
                <input className= "recipeinputbox" type="text" value={this.state.query} onChange={this.handleChange} />
                <select className="diet" onChange={this.handleDiet}>
                    <option value="">No Dietary Restrictions</option>
                    <option value="Pescetarian">Pescetarian</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                </select>
                <select className="allergy" onChange={this.handleAllergy}>
                    <option value="">No Allergy Restrictions</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Gluten">Gluten</option>
                    <option value="Peanut">Peanut</option>
                    <option value="Seafood">Seafood</option>
                </select>
                <select className= "courses" onChange={this.handleCourse}>
                    <option value="">All Courses</option>
                    <option value="Breakfast and Brunch">Breakfast and Brunch</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Appetizers">Appetizers</option>
                    <option value="Salads">Salads</option>
                    <option value="Main Dishes">Main Dishes</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Soups">Soups</option>
                </select>
                <div>
                {this.state.query}
                </div>
                <input className="btn  recipesearchsubmit-button" type="submit" onClick={this.createAjax} />
            </div>
        );
    }

    createAjax = () => {
      this.props.search(this.state.query, this.state.diet, this.state.allergy, this.state.course)
    }

};

export default SearchBox
