import React from "react";
import "./App.css";
import Cockpit from "./Components/Cockpit/Cockpit";
import Lists from "./Components/Lists/Lists";
import uuid from "uuid";
import ls from "local-storage";
class App extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  componentWillMount() {
    localStorage.getItem(
      "items" &&
        this.setState({
          items: JSON.parse(localStorage.getItem("items"))
        })
    );
  }
  componentDidMount() {
    // if (!localStorage.getItem("items")) {
    //   this.handleSubmit();
    // } else {
    //   console.log("using localstorage!");
    // }
    //
    // this.handleChange();
  }
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
      editItem: false
    });
  };

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("items", JSON.stringify(nextState.items));
  }
  clearList = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  };
  render() {
    return (
      <div className="App">
        <Cockpit
          item={this.state.item}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          editItem={this.state.editItem}
        />
        <Lists
          items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
