import React, { Component } from "react";
import "./../../../src/index.css";
import List from "./List/List";
export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="ul container">
        <h3>todo list</h3>
        {items.map(item => {
          return (
            <List
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}{" "}
        <button className="clear-button container" onClick={clearList}>
          Clear List
        </button>
      </ul>
    );
  }
}
