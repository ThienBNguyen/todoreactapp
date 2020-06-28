import React, { Component } from "react";

export default class List extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list">
        <h3>{title}</h3>
        <div className="div">
          <span className="span" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span span className="span" onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
