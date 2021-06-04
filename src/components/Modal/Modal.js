import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { closeModal } from '../../actions';
import { Button } from '../Button';

import './_Modal.scss';

const noop = () => {};

const Modal = React.memo(({
    title, 
    content,
    hideOverlay,
    disableOverlayClick,
    width,
    height,
    dispatch
}) => {
    const handleClose = useCallback(() => {closeModal(dispatch)}, [dispatch]);
    let count = useRef(0);
    count.current++;

    return (
        <div 
            className={classNames({
                modal: true,
                hideOverlay: !!hideOverlay
            })}
            onClick={disableOverlayClick ? noop : handleClose}
        >
            <div className="modal__dialog" style={{width, height}}>
                {title && 
                    <div className="modal__dialog-title">
                        {title}
                    </div>
                }
                {content &&
                    <div className="modal__dialog-content">
                        {content}
                        <div>{`This modal rendered: ${count.current} times`}</div>
                    </div>
                }
            </div>
            <Button 
                className={classNames({
                    modal__close: true,
                    hideOverlay: !!hideOverlay
                })}
                onClick={handleClose}
                isCloseButton
            />
        </div>
    );
});

Modal.propTypes = {
    title: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    hideOverlay: PropTypes.bool,
    disableOverlayClick: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number
};

export default Modal;