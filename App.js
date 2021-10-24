import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Plan from "./Plan";

class App extends Component {
  state = {
    item: [],
    text: "",
  };
  handalChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleAdd = (e) => {
    if (this.state.text !== "") {
      const item = [...this.state.item, this.state.text];
      this.setState({ item: item, text: "" });
    }
  };
  handleDelete = (id) => {
    const OldItem = [...this.state.item];
    const item = OldItem.filter((element, i) => {
      return i !== id;
    });
    this.setState({ item: item });
  };
  render() {
    return (
      <div className="container-flud my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <h1 className="text-center text-white shadow-lg p-2">
              Today's plan
            </h1>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write plan here"
                  value={this.state.text}
                  onChange={this.handalChange}
                />
              </div>
              <div className="col-2">
                <button
                  className="btn btn-warning px-5 font-weight-bold"
                  onClick={this.handleAdd}
                >
                  {" "}
                  Add
                </button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row-m-5">
                  {this.state.item.map((value, i) => {
                    return (
                      <Plan
                        key={i}
                        id={i}
                        value={value}
                        sendData={this.handleDelete}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
