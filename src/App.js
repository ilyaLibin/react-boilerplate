import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router'
import initialize from './initializers';
import MainModel from './models';

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
                render={props => <InsightsView {...props}
                  store={store}/>}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
