import React from 'react';
import classNames from 'classnames';

import './_Button.scss';

const Button = ({onClick, isCloseButton, className}) => (
    <button 
        onClick={onClick} 
        className={classNames({
            button: true,
            close: !!isCloseButton,
            [className]: !!className
        })}
    >
        <span>{isCloseButton ? "×" : "Click Me"}</span>
    </button>
);

export default Button;