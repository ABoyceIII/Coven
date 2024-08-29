import { validatePassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { createAccount } from "../../services/authService";
import { FirebaseError } from "firebase/app";
import "../../css/CreateAccount.css";
import { createResident } from "../../services/residenceService";
import { useNavigate } from "react-router-dom";
import Resident from "../../classes/resident";
import { createFirebaseResident } from "../../services/residentService";
export default function CreateAccount() {
  const [isJoining, setIsJoining] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [response, setResponse] = useState("");
  const [displayName, setDisplayName] = useState("display"); //temp val
  const [fullName, setFullName] = useState("fullname"); //temp val

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

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
      let user = await handleCreateAccount();
      //console.log(user);
      var residentData = {
        uid: user.uid,
        emailAddress: email,
        fullName: fullName,
        displayName: displayName,
        photoURL: user.photoURL,
      };
      await createFirebaseResident(user.uid, residentData);

      window.location.href = "/account";
    } catch (error) {
      if (error.message == "Firebase: Error (auth/email-already-in-use).") {
        console.error("Email already in use.");
      } else {
        console.error("Account creation error", error);
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
        let user = await createAccount(email, password);
        return user;
      } catch (error) {
        throw error;
      }
    } else {
      console.error("Fields not valid");
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
    // if (fullName.length > 25 || fullName.length < 4) {
    //   setErrorMessage("Full Name must be between 4 and 25 characters.");
    //   areFieldsValid = false;
    // }
    // if (displayName.length > 10 || displayName.length < 4) {
    //   setErrorMessage("Display name must be between 2 and 10 characters.");
    //   areFieldsValid = false;
    // }
    if (areFieldsValid) {
      setErrorMessage("");
    }
    console.error(errorMessage);
    return areFieldsValid;
  };

  // TODO: Create account after first page, like mobile app.
  // TODO: Adjust css for page
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
      {/* TODO: Add password confirmation input box */}
      <button
        className="WelcomeButton"
        onClick={() => {
          handleClick();
        }}
      >
        create account
      </button>
      <button
        className="WelcomeButton"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        back
      </button>
    </div>
  );
}
