import { validatePassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebaseConfig";

export default function CreateAccount() {
  const [isJoining, setIsJoining] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [response, setResponse] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = async () => {
    if (await validateFields()) {
      //Create account
    }
  };

  const validateFields = async () => {
    //TODO: Create doesEmailExist method
    // if (await doesEmailExist(email)) {
    //   setErrorMessage("An account already exists with this email.");
    // }
    if (password.length < 8) {
      //Look into validatePassword method
      setErrorMessage("Password must be 8 characters or greater.");
    }
    if (fullName.length > 20 || fullName.length < 4) {
      setErrorMessage("Full Name must be between 4 and 20 characters.");
    }
    if (displayName.length > 10 || fullName.length < 4) {
      setErrorMessage("Display name must be between 2 and 10 characters.");
    }

    return errorMessage == "";
  };

  return (
    <div className="CreateAccount">
      <h2>please provide your email and password</h2>

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

      <h2 className="SetupInstruction">
        please confirm your account information. this information will only be
        accessible to the users who share your residence.
      </h2>
      <input
        type="text"
        placeholder="Display Name"
        onChange={(event) => {
          setDisplayName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Full Name"
        onchange={(event) => {
          setFullName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setResponse("");
          setIsJoining(true);
          setIsCreating(false);
        }}
      >
        join residence
      </button>
      <button
        onClick={() => {
          setResponse("");
          setIsJoining(false);
          setIsCreating(true);
        }}
      >
        create residence
      </button>
      {isJoining ? (
        <input
          type="text"
          placeholder="Join Code"
          value={response}
          onChange={(event) => setResponse(event.target.value)}
        />
      ) : isCreating ? (
        <input
          type="text"
          placeholder="Residence Name"
          value={response}
          onChange={(event) => setResponse(event.target.value)}
        />
      ) : (
        <h2 />
      )}
      <button onClick={() => handleClick()}>create account</button>
    </div>
  );
}
