import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import TableTitle from './components/TableLayout';


const App = () => {
  
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<TableTitle />} />
      </Routes>
    </BrowserRouter>     
  );
}

export default App;
