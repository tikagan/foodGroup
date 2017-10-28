
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class App extends Component {

    // getInitialState() {
    //     return {
            searchResults: []
    //     }
    // };

    constructor() {
      super();
      this.state = {
        searchResults: []
      }
    }

    showResults = (response) => {
        this.setState({searchResults: response.matches});

    };

    search(query, diet, allergy, course){
      if (diet === "Pescetarian") {
        var URL = 'http://api.yummly.com/v1/api/recipes?_app_id=1187f4c6&_app_key=7dbff064930ce67f94b7ded79f8958f7&q=' + query + '&maxResult=30&allowedDiet[]=390^Pescetarian'
      } else if (diet === "Vegan") {
        var URL = 'http://api.yummly.com/v1/api/recipes?_app_id=1187f4c6&_app_key=7dbff064930ce67f94b7ded79f8958f7&q=' + query + '&maxResult=30&allowedDiet[]=386^Vegan'
      } else if (diet === "Vegetarian") {
        var URL = 'http://api.yummly.com/v1/api/recipes?_app_id=1187f4c6&_app_key=7dbff064930ce67f94b7ded79f8958f7&q=' + query + '&maxResult=30&allowedDiet[]=387^Lacto-ovo vegetarian'
      } else {
        var URL = 'http://api.yummly.com/v1/api/recipes?_app_id=1187f4c6&_app_key=7dbff064930ce67f94b7ded79f8958f7&q=' + query + '&maxResult=30';
      }
      if (allergy === "Dairy") {
        var URL = URL + "&allowedAllergy[]=396^Dairy-Free"
      } else if (allergy === "Gluten") {
        var URL = URL + "&allowedAllergy[]=393^Gluten-Free"
      } else if (allergy === "Peanut") {
        var URL = URL + "&allowedAllergy[]=394^Peanut-Free"
      } else if (allergy === "Seafood") {
        var URL = URL + "&allowedAllergy[]=398^Seafood-Free"
      } else {
        var URL = URL
      }

      if (course === "Breakfast and Brunch") {
        var URL = URL + "&course^course-Breakfast and Brunch"
      } else if (course === "Lunch") {
        var URL = URL + "&course^course-Lunch"
      } else if (course === "Appetizers") {
        var URL = URL + "&course^course-Appetizers"
      } else if (course === "Salads") {
        var URL = URL + "&course^course-Salads"
      } else if (course === "Main Dishes") {
        var URL = URL + "&course^course-Main Dishes"
      } else if (course === "Desserts") {
        var URL = URL + "&course^course-Desserts"
      } else if (course === "Snacks") {
        var URL = URL + "&course^course-Snacks"
      } else if (course === "Soups") {
        var URL = URL + "&course^course-Soups"
      } else {
        var URL = URL
      }
      console.log(URL)
        $.ajax({
            type: "GET",
            dataType: 'jsonp',
            url: URL,
            success: function(response){
                this.showResults(response);
            }.bind(this)
        });
    };

    render(){
        return (
            <div>
                <SearchBox search={this.search.bind(this)} />
                <Results searchResults={this.state.searchResults} />
            </div>
        );
    };
}

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
                <input type="text" value={this.state.query} onChange={this.handleChange} />
                <select onChange={this.handleDiet}>
                    <option value="">No Dietary Restrictions</option>
                    <option value="Pescetarian">Pescetarian</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                </select>
                <select onChange={this.handleAllergy}>
                    <option value="">No Allergy Restrictions</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Gluten">Gluten</option>
                    <option value="Peanut">Peanut</option>
                    <option value="Seafood">Seafood</option>
                </select>
                <select onChange={this.handleCourse}>
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
                <input type="submit" onClick={this.createAjax} />
            </div>
        );
    }

    createAjax = () => {
      this.props.search(this.state.query, this.state.diet, this.state.allergy, this.state.course)
    }

};

class Results extends Component {

    render(){
        var resultItems = this.props.searchResults.map(function(result) {
        return <ResultItem key={result.id} img={result.smallImageUrls} link={result.id} name={result.recipeName} rating={result.rating} />
        });
        return(
            <ul>
                {resultItems}
            </ul>
        );
    }
};

class ResultItem extends Component {

      recipeSearch = (event) => {
      var URL = 'http://api.yummly.com/v1/api/recipe/' + this.props.link + '?_app_id=1187f4c6&_app_key=7dbff064930ce67f94b7ded79f8958f7'
        $.ajax({
            type: "GET",
            dataType: 'jsonp',
            url: URL,
            success: function(response){
              window.open(response.attribution.url)
            },
            failure: function(data) {
              console.log('failed')
            }
        });
    };

    render(){
        return (
          <li>
          <img src={this.props.img}></img>
          {this.props.name}, {this.props.rating} / 5
          <input type="submit" value="click here to see the recipe" onClick={this.recipeSearch}/>
          </li>
        );
    }
};


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
