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

const rootReducer = combineReducers({
    founderQuestionData: addScoreReducer,
    founders: founders,
    deleteState: deleteState,
    legal: legal,
    legalQuestionData: legalQuestionData,
    product: product,
    productQuestionData: productQuestionData,
    financials: financials,
    financialsQuestionData: financialsQuestionData
})

export default rootReducer;