import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './_Button.scss';

const Button = ({onClick, isCloseButton, className, text}) => (
    <button 
        onClick={(e) => {
            e.stopPropagation();
            onClick();
        }} 
        className={classNames({
            button: true,
            close: !!isCloseButton,
            [className]: !!className
        })}
    >
        <span>{isCloseButton ? "×" : text}</span>
    </button>
);

Button.defaultProps = {
    text: "Click Me"
}

Button.propTypes = {
    onClick: PropTypes.func,
    isCloseButton: PropTypes.bool,
    className: PropTypes.string,
    text: PropTypes.string
}

export default Button;