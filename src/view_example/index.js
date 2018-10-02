import React, { Component } from 'react';
import './styles.css';

class ExampleView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {}

  render() {
    return (
      <section className="view-wrapper">Hololo</section>
    )
  }
}

export default ExampleView;
