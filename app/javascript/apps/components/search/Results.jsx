import React, { Component } from 'react'
import pluralize from 'pluralize'
import lunr from 'lunr'
import ResultItem from './ResultItem'

class Results extends Component {

  componentDidUpdate(){
    var results = this.props.searchResults
    var userIngredients = []
    //ajax call that gets the current user's pantry, singularizes the ingredients, and puts them in an array
    $.ajax({
      url: '/api/pantry',
      type: 'GET',
      data: 'json',
      success: function(res) {
        res.result.forEach(function(ingObj) {
            userIngredients.push(pluralize.singular(ingObj.name))
        })
        console.log('userIngredients: ', userIngredients)
      }
    });
    console.log('results: ', results)
    var idx = lunr(function () {
      this.field('recipieName')
      this.field('ingredients')
      this.ref('recipeName')
      results.forEach((recipe) => {
        this.add(recipe)
      })
    })
    console.log('soup: ', idx.search('soup'))


  };

  render(){
    // once componentDidMount sorts this.props.searchResults replace this with the newly sorted array
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
