import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './App';
import { createStore, applyMiddleware,compose } from 'redux';

// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux';
import reducer from './reducers/index';

if (module.hot) module.hot.accept();

const enhancers = compose(
    applyMiddleware(thunk),
    composeWithDevTools(),
);

let store = createStore(reducer,enhancers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
