import React, { Component } from 'react';

import TrashButton from '../trash-button';
import ImpontantButton from '../impontant-button';

import './todo-list-item.css';


export default class TodoListItem extends Component {

  render() {
    const { label, done, important, onDeleted, onToggleDone, onToggleImportant } = this.props;
    
    let className = "d-flex todo-list-item";

    if (done) {
      className += " done"
    }

    if (important) {
      className += " important"
    }

    return (
      <div className={ className }>
        <span
          className="todo-list-item-label"
          onClick={ onToggleDone }>
          {label}
        </span>
        <div>
          <ImpontantButton 
            onToggleImportant={onToggleImportant}/>
          <TrashButton
          onDeleted={ onDeleted } />
        </div>
      </div>
    );
  }
}

