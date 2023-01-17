
let initialState={
    showModal: false
};

const uiReducer=(state=initialState, action) => {
    switch(action.type){
        case 'SET_SHOW_MODAL':
            console.log(action.payload.uishowModal)
            return{
                ...state,
                showModal: action.payload.uishowModal
            };
        default:
            return state;
    }
}

export default uiReducer;
