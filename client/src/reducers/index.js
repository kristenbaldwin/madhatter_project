import { combineReducers } from 'redux';
import loadOppReducer from './loadOppReducer';

const rootReducer = combineReducers({
    opps: loadOppReducer
});

export default rootReducer;