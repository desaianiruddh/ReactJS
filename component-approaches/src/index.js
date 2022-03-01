import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
//Diffrent App Components
// import App from './App';
// import App from './newApp/UseRef';
// import App from './newApp/PureComp';
import App from './newApp/UseReducer.jsx';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
