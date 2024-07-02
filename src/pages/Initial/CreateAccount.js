import { validatePassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { createAccount } from "../../services/authService";
import { FirebaseError } from "firebase/app";
import "../../css/CreateAccount.css";
export default function CreateAccount() {
  const [isJoining, setIsJoining] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [response, setResponse] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [step, setStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Handles the create account button functionality.
   * Tries to create a new Firebase account with the given fields.
   * If account successfully created, creates new Resident with user data.
   * If the user is creating a new Residence, creates a Residence.
   * If user us joining Residence, fetches residence from Join Code.
   * Connects Resident and Residence.
   */
  const handleClick = async () => {
    try {
      await handleCreateAccount();
    } catch (error) {
      if (error.message == "Firebase: Error (auth/email-already-in-use).") {
        console.log("Email already in use.");
      } else {
        console.log("Account creation error", error);
      }
    }
  };

  /**
   * Tries to create a new account with the email and password if all fields are valid.
   * Throws error if one occurs during account creation.
   */
  const handleCreateAccount = async () => {
    if (await validateFields()) {
      try {
        await createAccount(email, password);
      } catch (error) {
        throw error;
      }
    } else {
      console.log("Fields not valid");
    }
  };

  /**
   * Checks each of the fields for account creation. Returns whether or not they are all valid.
   * If a field is invalid, invalidity is reflected in errorMessage
   * @returns true if all fields are valid; else, false
   */
  const validateFields = async () => {
    //TODO: Create doesEmailExist method
    // if (await doesEmailExist(email)) {
    //   setErrorMessage("An account already exists with this email.");
    // }
    var areFieldsValid = true;
    if (password.length < 8) {
      //Look into validatePassword method
      setErrorMessage("Password must be 8 characters or greater.");
      areFieldsValid = false;
    }
    if (fullName.length > 25 || fullName.length < 4) {
      setErrorMessage("Full Name must be between 4 and 25 characters.");
      areFieldsValid = false;
    }
    if (displayName.length > 10 || displayName.length < 4) {
      setErrorMessage("Display name must be between 2 and 10 characters.");
      areFieldsValid = false;
    }
    if (areFieldsValid) {
      setErrorMessage("");
    }
    console.log(errorMessage);
    return areFieldsValid;
  };

  return (
    <div className="CreateAccount">
      {step == 0 ? (
        <div className="StepOne">
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
          <button
            onClick={() => {
              setStep(1);
            }}
          >
            next
          </button>
        </div>
      ) : (
        <div className="StepTwo">
          <h2 className="SetupInstruction">
            please confirm your account information. this information will only
            be accessible to the users who share your residence.
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
            onChange={(event) => {
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
          <button
            onClick={() => {
              setStep(0);
            }}
          >
            back
          </button>
          <button onClick={() => handleClick()}>create account</button>
        </div>
      )}
    </div>
  );
}
