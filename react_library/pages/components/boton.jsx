
import React from 'react';

const Ton = (props) => {
  return (
      <button className={`bg-${props.buttonColor} text-white hover:bg-${props.hoverColor} transition-colors duration-200`}>
          {props.buttonText}
      </button>
  );
}

export default Ton;