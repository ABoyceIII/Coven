import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useState, useEffect } from "react";

/**
 * Checks if the given email and password properly correspond to an existing account.
 * If so, the user data is returned. Otherwise, throws error
 * Tested; Successfully returns a UserImpl
 * @param {*} email
 * @param {*} password
 * @returns
 */
export async function signInEmail(email, password) {
  const auth = getAuth();
  var userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  console.log(user);
  return user;
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

/**
 * Creates a new account with the given email and password
 * @param {*} email
 * @param {*} password
 */
export async function createAccount(email, password) {
  var userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  var user = userCredential.user;
}
