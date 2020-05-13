import React, { Component } from 'react'
import "../../static/css/Search.css";

class SearchWorkout extends Component {
    render() {
      return (
        <div class="container">
          <h1><center>Workout Search</center></h1>
          <br/>
          <iframe title="airtable-embed" class="airtable-embed" src="https://airtable.com/embed/shrikqRv1TmB18B7o?backgroundColor=pink&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: 'transparent', border: '1px solid #ccc'}}></iframe>
        </div>
      )
    }
  }
  
  export default SearchWorkout