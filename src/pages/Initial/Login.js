/*
 * The login page. User gives a email and a password. If an account exists, redirects user to dashboard.
 * Otherwise, tells user to try again or create an account.
 */

import { useState } from "react";
import { LogInButton } from "../../components/auth/LogInButton";
import "../../css/Login.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Login">
      <h2 className="LoginInstructions">enter your login information below</h2>
      <div className="LoginFields">
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>

      <LogInButton email={email} password={password} />
    </div>
  );
}
