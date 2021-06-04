import React, { useContext } from 'react';
import { Modal } from '../components';
import { Store } from '../store/Store';

const ModalStack = () => {
    const { state, dispatch } = useContext(Store);
    return (state.modalStack.map(modal => <Modal {...modal} key={modal.id} dispatch={dispatch}/>));
};

export default ModalStack;