const defaultModalState = {
    title: "Sample Modal",
    content: "Content goes here",
    height: 300,
    width: 300,
    hideOverlay: false,
    disableOverlayClick: false,
};

export const openModal = (dispatch, modal = defaultModalState) => {
    dispatch({
        type: 'OPEN_MODAL',
        modal:{
            ...defaultModalState,
            ...modal,
            id: Math.floor(Math.random() * 100000000)
        }
    });
};

export const closeModal= (dispatch) => {
    dispatch({ type: 'CLOSE_MODAL' })
};