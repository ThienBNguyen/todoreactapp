import React, { Component } from "react";

export default class cockpit extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
    return (
      <div className="cockpit">
        <h1>to-do App!</h1>
        <form onSubmit={handleSubmit} className="cockpit-form container">
          <input
            value={item}
            placeholder="enter task"
            onChange={handleChange}
          ></input>
          <button type="submit">add</button>
        </form>
      </div>
    );
  }
}

// const cockpit = props => (
//   <div>
//
//   </div>
// );
// export default cockpit;
