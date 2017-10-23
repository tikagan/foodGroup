
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
    
    search(query){
      var URL = 'http://api.yummly.com/v1/api/recipes?_app_id=1187f4c6&_app_key=7dbff064930ce67f94b7ded79f8958f7&q=' + query;
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
      query: ''
    }
  }
    
    handleChange = (event) => {
      this.setState({query: event.target.value});
    }

    render(){
        return (
            <div>
                <input type="text" value={this.state.query} onChange={this.handleChange} />
                <div>
                {this.state.query}
                </div>
                <input type="submit" onClick={this.createAjax} />
            </div>
        );
    }

    createAjax = () => {
        var query    = this.state.value
        
        this.props.search(this.state.query)
    }

};

class Results extends Component {
    
    render(){
        var resultItems = this.props.searchResults.map(function(result) {
        return <ResultItem link={result.id} name={result.recipeName} rating={result.rating} />
        });
        return(
            <ul>
                {resultItems}
            </ul>           
        );
    }
};

class ResultItem extends Component {
    
    render(){
        return <li>{this.props.name}, {this.props.rating} / 5, <a href={"http://api.yummly.com/v1/api/recipe/" + this.props.link + "?_app_id=1187f4c6&_app_key=7dbff064930ce67f94b7ded79f8958f7"}>click here to see the recipe</a></li>;
    }
};


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})