import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Initial/Home.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
