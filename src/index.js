import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter as Router,
    Navigate
} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();