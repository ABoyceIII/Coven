import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

/**
 * Checks if the given email and password properly correspond to an existing account.
 * If so, the user data is returned.
 * @param {*} email
 * @param {*} password
 */
function signInEmail(email, password) {
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
