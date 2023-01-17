export const setShowModal =(show) => (dispatch)=>{
    console.log("ENTRA")
    dispatch({
        type:'SET_SHOW_MODAL',
        payload: {uishowModal: show}
    });
}