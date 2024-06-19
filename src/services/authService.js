import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useState, useEffect } from "react";

/**
 * Checks if the given email and password properly correspond to an existing account.
 * If so, the user data is returned.
 * @param {*} email
 * @param {*} password
 * @returns
 */
export function signInEmail(email, password) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

/**
 * Updates whenever auth detects a change in user.
 * When a change is detected, returns the user.
 * @returns
 */
export function useAuthentication() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
  }, []);
  return user;
}
