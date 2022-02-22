import React, { Component } from "react";

import './create-item-panel.css';

export default class CreateItemPanel extends Component {
  constructor() {
    super();

    this.state = {
      label: '',
    };
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const currentLabel = this.state.label.trim();

    if (currentLabel.length > 0) {
      this.props.onCreate(this.state.label);
      this.setState({
        label: ''
      });
    }
  };

  render() {

    return (
      <form
        className="form-control d-flex create-item-panel"
        onSubmit={this.onSubmit}>
        <input type="text"
          className="btn btn-outline-secondary"
          placeholder="Что нужно записать?"
          onChange={this.onLabelChange}
          value={this.state.label} />
        <button
          type="submit"
          className="btn btn-outline-secondary">
          Добавить задачу
        </button>
      </form>
    );
  }

};
