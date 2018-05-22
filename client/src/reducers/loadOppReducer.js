// Reducer

export default function loadOppReducer(state=[], action) {
    switch (action.type) {
        case 'loadOpp':
            return state.concat(action.payload);
        default:
            return state;
    }
}