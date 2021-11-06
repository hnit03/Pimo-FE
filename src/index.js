import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
   <Provider store={store}>
      <MessengerCustomerChat
         pageId="108999594921598"
         appId="377383184072138"
      />,
      <App />
   </Provider>,
   document.getElementById('root')
);