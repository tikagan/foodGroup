
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Results from './Results'
import SearchBox from './SearchBox'
import ResultItem from './ResultItem'

class Search extends Component {

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

export default Search
