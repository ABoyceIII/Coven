import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Initial/Home.js";
import Login from "./pages/Initial/Login.js";
import { useAuthentication } from "./services/authService.js";
import { useEffect, useState } from "react";
import CreateAccount from "./pages/Initial/CreateAccount.js";
import Account from "./pages/Account.js";
import CreateResidence from "./pages/CreateResidence.js";

function App() {
  const user = useAuthentication();
  const [environment, setEnvironment] = useState();

  //Whenever user updates, refresh our environment variable.
  useEffect(() => {
    //console.log("Refreshing Environment");
  }, [user]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/account" element={<Account user={user} />} />
          <Route path="/dashboard" element={<Home user={user} />} />
          <Route
            path="/create-residence"
            element={<CreateResidence user={user} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
