import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyApp1 from './MyApp1';
import MySoftApp1 from './MySoftApp1';
import ComponentLifeCycle from './ComponentLifeCycle';
import MyForm from './MyForm';
import ReactRouter from './ReactRouter';
import Table from './Table'

ReactDOM.render(
  <React.StrictMode>
    {/* <MyForm/> */}
  {/* <Table/> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
