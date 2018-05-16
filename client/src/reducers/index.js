import { combineReducers } from 'redux';
import showAllOpps from './allOpps_reducer';

const rootReducer = combineReducers({
    allOpps: showAllOpps
});

export default rootReducer;