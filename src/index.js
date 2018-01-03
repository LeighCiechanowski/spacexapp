import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers/SpaceXReducers'
import './index.css';
import App from './App';
import Root from './components/Root'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

let store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root'));
registerServiceWorker();
