
let initialState = {
  playersSelected:null,
  players: []
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYER':
      return {
        ...state,
        players: action.payload.player
      };
    default:
      return state;
      
  }
}

export default playerReducer;