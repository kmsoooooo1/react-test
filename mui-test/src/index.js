import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import App from './App';
import Authentication from './pages/authentication/Authentication';
import Database from './pages/database/Database';
import Storage from './pages/storage/Storage';
import Hosting from './pages/hosting/Hosting';
import Functions from './pages/functions/Functions';
import MachineLearning from './pages/machineLearning/MachineLearning';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="authentication" element={<Authentication />}/>
        <Route path="database" element={<Database />}/>
        <Route path="storage" element={<Storage />}/>
        <Route path="hosting" element={<Hosting />}/>
        <Route path="functions" element={<Functions />}/>
        <Route path="machine-learning" element={<MachineLearning />}/>
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

