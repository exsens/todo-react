import React, { Component } from "react";
import './search-panel.css';

export default class SearchPanel extends Component {

  render() {

    return (

      <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск"
        onChange={(e) => this.props.searchItems(e.target.value)}
      />

    );
  }
};

