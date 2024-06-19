/*
Invokes the google sign in pop-up.
Checks if the user already has an account set up.
If so, it redirects user to the dashboard.
Otherwise, redirects user to the account set up page.
*/
export function SignInButton() {
  const onSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;

      let isExistingUser = await doesResidentExist(user.email);
      ////console.log(user.email + " exists: " + isExistingUser);

      if (isExistingUser) {
        window.location.href = `/dashboard`;
      } else {
        window.location.href = "/welcome";
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return <button onClick={() => onSignIn()}>sign in</button>;
}
