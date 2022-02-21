import React, { Component } from "react";

import './trash-button.css'

export default class TrashButton extends Component {

  render() {
    const { onDeleted } = this.props;

    return (
      <button className={ 'trash-button' }
      onClick={ onDeleted }>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <title>bin2</title>
          <path d="M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z"></path>
        </svg>
      </button>
    )
  }
}