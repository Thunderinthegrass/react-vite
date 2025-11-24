import React, { Component } from "react";

export default class ChildComponentClass extends Component {
  
  render() {
    // const {count, onIncrement} = this.props;//деструктуризация пропсов, если сделать так, то в абзаце и в кнопке можно будет прописать просто count и onIncrement, без this.props
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.props.onIncrement}>Еще один счетчик</button>
      </div>
    );
  }
}
