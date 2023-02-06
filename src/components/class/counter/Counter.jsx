import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.complexIncrease = this.complexIncrease.bind(this);
  }

  complexIncrease() {
    this.setState(
      setTimeout(() => {
        this.setState((prevState) => ({ value: prevState.value + 1 }));
      }, 2000)
    );
  }

  render() {
    return (
      <div>
        <section className='section' style={{ textAlign: 'center' }}>
          <h2 style={{ margin: '1rem' }}>regular counter</h2>
          <h1>{this.state.value}</h1>
          <button className='btn' onClick={() => this.setState({ value: this.state.value + 1 })}>
            Increase
          </button>
          <button className='btn' onClick={() => this.setState({ value: 0 })}>
            Reset
          </button>
          <button className='btn' onClick={() => this.setState({ value: this.state.value - 1 })}>
            Decrease
          </button>
          <h2 style={{ margin: '1rem' }}>complex counter</h2>
          <h1>{this.state.value}</h1>
          <button className='btn' onClick={this.complexIncrease}>
            Increase
          </button>
        </section>
        ;
      </div>
    );
  }
}

export default Counter;
