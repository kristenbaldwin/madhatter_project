//Reducer

function showAllOpps(state = [], action) {
    switch(action.type) {
        case "ALL_OPPS":
            return state.concat(action.opps);
        default:
            return state;
    }
}

export default showAllOpps;