import React from 'react';
import '../App.css';

function Summary(props) {
  return(
    <div className="summary">
      <p>This is a Summary!</p>
      <p>You bought: {props.cart}</p>
    </div>
  );
}

export default Summary;
