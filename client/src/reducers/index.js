import { combineReducers } from 'redux';
<<<<<<< HEAD
import showAllOpps from './allOpps_reducer';

const rootReducer = combineReducers({
    allOpps: showAllOpps
=======
import loadOppReducer from './loadOppReducer';

const rootReducer = combineReducers({
    opps: loadOppReducer
>>>>>>> 5ad7d0372dbed92e1fcc3b6dc139261aa39f86cd
});

export default rootReducer;