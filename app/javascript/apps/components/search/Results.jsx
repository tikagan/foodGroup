import React, { Component } from 'react'
import pluralize from 'pluralize'
import lunr from 'lunr'
import ResultItem from './ResultItem'

class Results extends Component {
  constructor() {
    super();
    this.state = {
      sortedResults: []
    }
  }

  componentDidUpdate(){
    var results = this.props.searchResults
    //ajax call that gets the current user's pantry, singularizes the ingredients, and puts them in an array

    // tokenizes recipeName without using Lunr's really intensive tokenizing function
    results = results.map(r => {
      r.nameTokens = r.recipeName.split(' ');
      return r
    })
    // creates index for lunr to search on results arrap
    var idx = lunr(function () {
      this.field('nameTokens')
      this.field('ingredients')
      results.forEach((recipe) => {
        this.add(recipe)
      })
    })
    // searches results for userIngredients
    this.setState({sortedResults: idx.search(this.props.userIngredients)})
  };

  render(){
    // once componentDidMount sorts this.props.searchResults replace this with the newly sorted array
      var resultItems = this.state.sortedResults.map(function(result) {
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
