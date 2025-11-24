import { Component } from "react";
import ChildComponentClass from "./ChildComponentClass";
import ChildComponentFunction from "./ChildComponentFunction";
import { NavLink } from "react-router-dom";

class ClassComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
      this.setState({count: this.state.count + 1});
      this.setState({count: this.state.count + 1});//этот и верхний используют первоначальное значение состояния
      this.setState((prevState) => ({count: prevState.count + 1}));//использует актуальное значение состояния
    }

  decrement = () => {
      this.setState({count: this.state.count - 1});
    }

  render() {
    return (
      <div>
        <NavLink to={'/'}>{'<'} На главную</NavLink>
        <h1>Классовый компонент</h1>
        <p>Счетчик: {this.state.count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <ChildComponentClass count={this.state.count} onIncrement={this.increment} />
        <ChildComponentFunction count={this.state.count} onIncrement={this.increment} />
      </div>
    )
  }
}

export default ClassComponent;