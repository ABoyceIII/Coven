import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

/*
Redirects the user to the account creation webpage
*/
export function CreateAccountButton() {
  const redirect = async () => {
    window.location.href = "/create";
    // try {
    //   const result = await signInWithPopup(auth, new GoogleAuthProvider());
    //   const user = result.user;
    //   let isExistingUser = await doesResidentExist(user.email);
    //   ////console.log(user.email + " exists: " + isExistingUser);
    //   if (isExistingUser) {
    //     window.location.href = `/dashboard`;
    //   } else {
    //     window.location.href = "/welcome";
    //   }
    // } catch (error) {
    //   console.error("Error signing in:", error.message);
    // }
  };

  return (
    <button onClick={() => redirect()} className="WelcomeButton">
      create account
    </button>
  );
}
