import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Initial/Home.js";
import Login from "./pages/Initial/Login.js";
import { useAuthentication } from "./services/authService.js";
import { useEffect, useState, createContext } from "react";
import CreateAccount from "./pages/Initial/CreateAccount.js";
import Account from "./pages/Account.js";
import CreateResidence from "./pages/CreateResidence.js";
import Dashboard from "./pages/Main/Dashboard.js";

export const EnvironmentContext = createContext();

function App() {
  const user = useAuthentication();
  const [environment, setEnvironment] = useState({
    user: null,
    residence: null,
    resident: null,
  });

  useEffect(() => {
    setEnvironment((prevEnv) => ({ ...prevEnv, user: user }));
  }, [user]);

  const updateEnvironment = (field, value) => {
    setEnvironment((prevEnv) => ({ ...prevEnv, [field]: value }));
  };

  return (
    <div className="App">
      {/* <EnvironmentContext.Provider value={{ environment, updateEnvironment }}> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/account" element={<Account user={user} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route
            path="/create-residence"
            element={<CreateResidence user={user} />}
          />
        </Routes>
      </BrowserRouter>
      {/* </EnvironmentContext.Provider> */}
    </div>
  );
}

export default App;
