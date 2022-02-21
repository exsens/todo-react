import React from "react";

import './create-item-panel.css';

const CreateItemPanel = ({onCreate}) => {
  return (
    <div className="form-control create-item-panel">
      <button 
      className="btn btn-outline-secondary"
      onClick={() => onCreate('hello')}>Add Item</button>
    </div>
  );
};

export default CreateItemPanel;