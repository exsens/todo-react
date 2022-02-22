import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  constructor() {
    super();

    this.buttons = [
      { label: 'Все', id: 'all' },
      { label: 'Важные', id: 'important' },
      { label: 'Выполнены',  id: 'done' },
    ];
  }

  createElements = (arr) => {
    return arr.map((el) => {
      const isActive = this.props.filter === el.id;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'

      return <button
        key={el.id}
        type="button"
        className={`btn ${clazz}`}
        onClick={() => this.props.onChangeFilter(el.id)}>
        {el.label}
      </button>
    });
  };

  render() {

    return (
      <div className="btn-group item-status-filter">
        {this.createElements(this.buttons)}
      </div>
    );
  }
}


