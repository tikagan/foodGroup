import React, { Component } from 'react'

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
          <li className="recipe-search-item">
          <img className="search-item-image" src={this.props.img}></img>
          {this.props.name}, {this.props.rating} / 5
          <button className= "btn btn-sm searchresult-button" type="submit"  onClick={this.recipeSearch}> Show Recipe</button>
          </li>
        );
    }
};

export default ResultItem
