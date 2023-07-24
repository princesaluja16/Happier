import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from "react-redux";
import { ScrollToTop } from './components/ScrollToTop';
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
       <Provider store={store}>
    <ScrollToTop/>
    <App />
    </Provider>
    </BrowserRouter>
);


