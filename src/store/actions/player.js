import db from '../../credenciales';


export const setPlayer = (player) => async (dispatch) => {
    const response=db.collection('Noticias');
    const data=await response.get();
    
    var noticias=[]
    data.docs.forEach(item=>{
        noticias.push(item.data())
        console.log(item.data())
    })

    dispatch({
        type : 'SET_PLAYER',
       payload: { player: noticias }
    });
}