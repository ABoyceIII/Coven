import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Initial/Home.js";
import Login from "./pages/Initial/Login.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
