//Reducer
function opp_id(state = [], action) {
    switch (action.type) {
        case "SELECT_OPP":
            return {
                id: action.id
            }
        default: 
            return state;
    }
}

export default opp_id;

