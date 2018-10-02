import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import initialize from './initializers';
import MainModel from './models';
import ExampleView from './view_example';

initialize();

const store = new MainModel();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <Router>
        <main>
          <Switch>
            <Route path="/"
              exact
              render={props => <ExampleView {...props}
                store={store}/>}/>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
