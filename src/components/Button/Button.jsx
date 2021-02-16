import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

const stylesClass = ['btn--primary', 'btn--outline'];
const sizesClass = ['btn--medium', 'btn--large'];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = stylesClass.includes(buttonStyle)
    ? buttonStyle
    : stylesClass[0];
  const checkButtonSize = sizesClass.includes(buttonSize)
    ? buttonSize
    : sizesClass[0];

  return (
    <Link to='/sign-up' className='btn--mobile'>
      <button
        type={type}
        className={`btn ${checkButtonSize} ${checkButtonStyle}`}
        onClick={onClick}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
