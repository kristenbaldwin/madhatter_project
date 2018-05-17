import { combineReducers } from 'redux';
// import showAllOpps from './allOpps_reducer';
import loadOppReducer from './loadOppReducer';

// const rootReducer = combineReducers({
//     allOpps: showAllOpps


const rootReducer = combineReducers({
    opps: loadOppReducer
});

export default rootReducer;