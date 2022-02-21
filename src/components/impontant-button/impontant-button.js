import React, { Component } from "react";

import './impontant-button.css';

export default class ImpontantButton extends Component {

  render() {

    let classNames = 'impontant-button';
    let { onToggleImportant } = this.props;

    return (
      <button className={classNames}
        onClick={ onToggleImportant }>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <title>note-important</title>
          <path d="M6 11v15.001c0 0.56 0.451 0.999 1.007 0.999h13.993v-4.994c0-1.119 0.895-2.006 1.998-2.006h4.002v-9h-21zM6 10h21v-2.993c0-0.557-0.447-1.007-0.999-1.007h-19.003c-0.56 0-0.999 0.447-0.999 0.999v3.001zM21.5 28h-14.5c-1.105 0-2-0.902-2-2.001v-18.998c0-1.105 0.902-2.001 2.001-2.001h18.998c1.105 0 2.001 0.894 2.001 1.994v14.006l-6 7h-0.5zM22 26.5l4.7-5.5h-3.703c-0.546 0-0.997 0.452-0.997 1.009v4.491zM15 13h3v8h-3v-8zM16 14v6h1v-6h-1zM15 22h3v3h-3v-3zM16 23v1h1v-1h-1z"></path>
        </svg>
      </button>
    )
  }
}