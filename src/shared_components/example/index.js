import React, { Component } from 'react';
import { observer } from 'mobx-react';

import './styles.css';

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      some: {}
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div className="example-wrapper" />
    )
  }
}

export default observer(Example);
