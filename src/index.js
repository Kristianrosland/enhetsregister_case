import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const MyApp = () => (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
