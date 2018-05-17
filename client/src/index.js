import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers/combine-reducer'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

export default store;

