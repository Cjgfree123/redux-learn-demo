import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import reducer from './reducers/index';

if(module.hot)module.hot.accept();

let store = createStore(reducer);

render();
store.subscribe(()=>{
    render();
});

function render(){
    ReactDOM.render(
        <App store={store}/>
        ,
        document.getElementById('root')
    );
}