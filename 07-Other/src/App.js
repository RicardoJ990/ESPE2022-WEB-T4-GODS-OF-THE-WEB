import "./App.css";
import { Routes, Route } from "react-router-dom";
import ClientApi from "./views/ClientApi";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/clientapi" element={<ClientApi/>} />
      </Routes>
    </div>
  )
}

export default App;

