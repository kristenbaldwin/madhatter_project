import {combineReducers} from 'redux';
import addScoreReducer from '../reducers/qa-add-founder-score-reducer'
import questions from '../reducers/qa-reducer';
import founders from '../reducers/founders-reducer'
import deleteState from '../reducers/clear-data-reducer'
import legal from '../reducers/legal-reducer'
import legalQuestionData from './qa-add-legal-score-reducer'
import product from '../reducers/product-reducer'
import productQuestionData from './qa-add-product-score-reducer'
import financials from '../reducers/financials-reducer'
import financialsQuestionData from './qa-add-financials-score-reducer'
import loadOppReducer from './loadOppReducer';
import opp_id from './singleOpp_reducer';

const rootReducer = combineReducers({
    founderQuestionData: addScoreReducer,
    questions: questions,
    founders: founders,
    deleteState: deleteState,
    legal: legal,
    legalQuestionData: legalQuestionData,
    product: product,
    productQuestionData: productQuestionData,
    financials: financials,
    financialsQuestionData: financialsQuestionData,
    opportunities: loadOppReducer,
    opp_id: opp_id
})

export default rootReducer;