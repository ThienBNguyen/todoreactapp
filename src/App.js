import React from "react";
import "./App.css";
import Cockpit from "./Components/Cockpit/Cockpit";
import Lists from "./Components/Lists/Lists";
import uuid from "uuid";
class App extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    this.setState({ item: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    console.log(newItem);
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editITem: false
    });
  };
  render() {
    return (
      <div className="App">
        <Cockpit
          item={this.state.item}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Lists items={this.state.items} />
      </div>
    );
  }
}

export default App;
