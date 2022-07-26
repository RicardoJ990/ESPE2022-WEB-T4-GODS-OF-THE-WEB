import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TableLayout from './components/TableLayout';

const App = () => {

  return (
  
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<TableLayout />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;


