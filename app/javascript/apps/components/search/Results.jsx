import React, { Component } from 'react'

import ResultItem from './ResultItem'

class Results extends Component {

  componentDidMount(){
    var sortedResults = this.props.searchResults
    var userIngredients = []
    $.ajax({
      url: '/api/pantry',
      type: 'GET',
      data: 'json',
      success: function(res) {
        res.ingredients.forEach(function(ingObj) {
            userIngredients.push(ingObj.name)
        })
        console.log('userIngredients: ', userIngredients)
      }

    });


    // rest of the search logic here
  };



  render(){
    // once componentDidMount sorts this.proprs.searchResults replace this with the newly sorted array
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

export default Results
