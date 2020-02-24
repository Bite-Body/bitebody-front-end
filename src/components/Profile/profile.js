import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Header } from 'react-bootstrap/lib/Modal';
import { Button } from 'react-bootstrap';



class App extends Component {
    render() {
      return (
        <div className = "App">
            <h1> REact with bootstrap</h1>
            <Button bsStyle = "primary"></Button>

        </div>
      );
    }
  }
  
  export default App