import founders from './founders-reducer';

export default function(state=founders(), action){
    switch (action.type) {
        case "ADD_SCORE":
            for (var i=0; i < state.length; i++) {
                if (state[i].id === parseInt(action.payload[0], 10)){
                    state[i].answer = action.payload[1]
                }
            }
            return state;
        // break;
        case "CLEAR_DATA":
            state = founders();
            return state;
        default: return state;
    }
}
