//Reducer

const initialState = {
    opps: []
}

function showAllOpps(state = initialState, action) {
    switch(action.type) {
        case "ALL_OPPS":
        return {
            opps: action.opps
        }
        default:
            return state;
    }
}

export default showAllOpps;