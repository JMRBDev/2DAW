import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dolares: 0,
      euros: 0,
    };
  }

  cambiar(moneda, valor) {
    if (moneda === "euro") {
      this.setState({
        euros: valor,
        dolares: valor / 0.8,
      });
    } else if (moneda === "dolar") {
      this.setState({
        euros: valor * 0.8,
        dolares: valor,
      });
    }
  }

  render() {
    return (
      <div>
        <Input moneda="euro" value={this.state.euros} cambiar={(moneda, valor) => this.cambiar(moneda, valor)} />
        <Input moneda="dolar" value={this.state.dolares} cambiar={(moneda, valor) => this.cambiar(moneda, valor)} />
      </div>
    );
  }
}

class Input extends Component {
  handleChange(event) {
    this.props.cambiar(this.props.moneda, event.target.value);
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.moneda}>{this.props.moneda}: </label>
        <input type="number" name={this.props.moneda} id={this.props.id} value={this.props.value} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default App;