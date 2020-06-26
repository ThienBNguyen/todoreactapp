import React, { Component } from "react";
import "./../../../src/index.css";
import List from "./List/List";
export default class TodoList extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul className="ul container">
        <h3>todo list</h3>
        {items.map(item => {
          return <List key={item} title={item.title} />;
        })}
      </ul>
    );
  }
}
