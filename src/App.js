import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Initial/Home.js";
import Login from "./pages/Initial/Login.js";
import { useAuthentication } from "./services/authService.js";
import { useEffect, useState } from "react";

function App() {
  const user = useAuthentication();
  const [environment, setEnvironment] = useState();

  //Whenever user updates, refresh our environment variable.
  useEffect(() => {
    console.log("Refreshing Environment");
  }, [user]);

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
