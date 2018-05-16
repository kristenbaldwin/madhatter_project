import financials from './financials-reducer';

export default function(state=financials(), action){
    switch (action.type) {
        case "ADD_SCORE":
            for (var i=0; i < state.length; i++) {
                if (state[i].id === parseInt(action.payload[0])){
                    state[i].answer = action.payload[1]
                }
            }
            return state;
        break;
        case "CLEAR_DATA":
        state = financials();
        return state;
        default: return state;
    }
}