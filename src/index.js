import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Support from './Support/Support';
import News from './News/News';
import Admin from './Admin/Admin';
import Logging from './Admin/Logging';
import Entering from './Admin/Entering';
import Buying from './Admin/Buying';
import Gender from './Admin/Gender';
import FromWhere from './Admin/FromWhere';
import ToWhere from './Admin/ToWhere';
import SuburbianTrains from './Schedule/SuburbianTrains';
import LongDistanceTrains from './Schedule/LongDistanceTrains';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";


window.history.pushState(null, null, '/news');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="support" element={<Support />} />
          <Route path="news" element={<News />} />
          <Route path="suburbian" element={<SuburbianTrains />} />
          <Route path="long_distance" element={<LongDistanceTrains />} />
          <Route path="admin" element={<Admin />}>
            <Route path="entering" element={<Entering />} />
            <Route path="buying" element={<Buying />} />
            <Route path="gender" element={<Gender />} />
            <Route path="from_where" element={<FromWhere />} />
            <Route path="to_where" element={<ToWhere />} />
          </Route>
          <Route path="logging" element={<Logging />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();