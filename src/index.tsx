import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MergeSort from './MergeSort/MergeSort';
import SelectionSort from './SelectionSort/SelectionSort';
import QuickSort from './QuickSort/QuickSort';
import InsertionSort from './InsertionSort/InsertionSort';
import BubbleSort from './BubbleSort/BubbleSort';
import Timsort from './Timsort/Timsort';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="merge-sort" element={<MergeSort/>}/>
          <Route path="selection-sort" element={<SelectionSort/>}/>
          <Route path="quick-sort" element={<QuickSort/>}/>
          <Route path="insertion-sort" element={<InsertionSort/>}/>
          <Route path="bubble-sort" element={<BubbleSort/>}/>
          <Route path="tim-sort" element={<Timsort/>}/>
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
