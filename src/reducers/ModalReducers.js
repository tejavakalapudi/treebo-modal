export const reducer = (state, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state, 
                modalStack: [
                    ...state.modalStack, 
                    action.modal
                ]
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                modalStack: state.modalStack.slice(0, -1)
            };
        default:
            return state;
    }
};