import React from 'react';
import ReactDOM from 'react-dom/client';    //Đây là thiết lập ban đầu lúc mới create dự án
// import ReactDOM from 'react-dom';
// import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const Element = () => (<h1>Xin chào, {formatName(user)}! </h1>);
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
// const user = {
//   firstName: 'Nguyễn',
//   lastName: 'Trí'
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
    // <>
    //     <Element />
    //     <App />
    // </>
    <App />
);
// setTimeout(()=>{
//   root.unmount();
// }, 5000);

// const css = {
//   'border': '1px solid #000',
// }
// const css2 = {
//   'border-collapse': 'collapse',
// };
// Object.setPrototypeOf(css2, css);

// console.log(css2);

// const myelement = <h1>I Love JSX!</h1>;
// const myelement = React.createElement('h1', {}, 'I do not unse JSX!');
// ReactDOM.render(element, document.getElementById('root'));
// ReactDOM.createRoot(document.getElementById('root')).render(element);
// createRoot(document.getElementById('rootimport {createRoot} from 'react-dom/client'')).render(myelement);

// console.log(ReactDOM);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
