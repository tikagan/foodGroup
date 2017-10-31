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


  componentWillReceiveProps(newprops){
    // console.log('newprops: ', newprops)
    // tokenizes recipeName without using Lunr's really intensive tokenizing function
    var results = newprops.searchResults.map(r => {
      r.nameTokens = r.recipeName.split(' ');
      return r
    })
    // creates index for lunr to search on results
    var idx = lunr(function () {
      this.field('nameTokens')
      this.field('ingredients')
      results.forEach((recipe) => {
        this.add(recipe)
      })
    })
    // searches results for userIngredients
    var lunrSearch = idx.search(this.props.userIngredients)
    var dictionary = {}
    lunrSearch.map(function(r, i) {
      dictionary[r.ref] = {score: r.score,
                           index: i
                          }
    });
    // adds score to each recipie object, if no score exists removes it from results
    var sortedResults = {}
    results.map(function (recipie, i) {
      if (dictionary[recipie.id]) {
        // adds the score to the recipie object
        recipie.score = dictionary[recipie.id].score
      } else {
        results.splice(i, 1)
      }
    })
    results.sort((a, b) => {
      return b.score - a.score
    })
    var reduceTo30 = (results) => {
      if (results.length > 30) {
        var excess = results.length - 30
        results.splice(30, excess)
      }
    };
    reduceTo30(results)
    // sets sortedResults state
    var setSortedState = (results) => {
      this.setState({sortedResults: results })
    };
    setSortedState(results)
  };


  render(){
      var resultItems = this.state.sortedResults.map(function(result) {
      return <ResultItem key={result.id} img={result.smallImageUrls} link={result.id} name={result.recipeName} rating={result.rating} />
      });
      return(
          <ol>
              {resultItems}
          </ol>
      );
  }
};

export default Results
