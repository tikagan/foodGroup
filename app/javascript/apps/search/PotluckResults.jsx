import React, { Component } from 'react'
import pluralize from 'pluralize'
import lunr from 'lunr'
import PotluckResultItem from './PotluckResultItem'

class PotluckResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortedResults: []
    }
  }

  componentWillReceiveProps(newprops){
    this.guestData = newprops.guestData
    // tokenizes recipeName without using Lunr's really intensive tokenizing function
    var results = newprops.searchResults.map(r => {
      r.nameTokens = r.recipeName.split(' ');
      return r
    })
    // creates index for lunr to search on results
    this.idx = lunr(function () {
      this.field('nameTokens')
      this.field('ingredients')
      results.forEach((recipe) => {
        this.add(recipe)
      })
    })
    // creates array (lunrSearch) of search results
    var lunrSearch = Object.keys(this.guestData).map(id => {
      var i = this.guestData[id].ingredients
      return this.idx.search(i)
    }, this)

    var dictionary = {}
    // maps the array of searches
    lunrSearch.map((search, i) => {
      // maps the recipies in each search
      search.map((r, i) => {
        if (dictionary[r.ref]) {
        dictionary[r.ref] += r.score
        } else {
          dictionary[r.ref] = r.score
        }
      })
    })

    // adds score to each recipie object, if no score exists removes it from results
    var sortedResults = {}
    results.map(function (recipie, i) {
      if (dictionary[recipie.id]) {
        // adds the score to the recipie object
        recipie.score = dictionary[recipie.id]
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
    // console.log('results: ', results)
  }


  render(){
      var resultItems = this.state.sortedResults.map(function(result) {
      return <PotluckResultItem key={result.id} img={result.smallImageUrls} link={result.id} name={result.recipeName} rating={result.rating} potluck_id={result.potluck_id}/>
      });
      return(
          <ol>
              {resultItems}
          </ol>
      );
  }
};

export default PotluckResults
