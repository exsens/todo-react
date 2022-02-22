import React from "react";
import './app-header.css';

const AppHeader = ( {todo, done} ) => {

  return (
    <div className="d-flex app-header">
      <h1>Список задач</h1>
      <h2>{ todo } осталось, { done } выполнены:</h2>
    </div>

  )
};

export default AppHeader;