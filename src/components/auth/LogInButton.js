import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInEmail } from "../../services/authService";
export function LogInButton(props) {
  const handleLogin = async () => {
    try {
      const user = await signInEmail(props.email, props.password);
      //If we have successfully retrieved a user from the signInEmail method
      //console.log(user);
      if (user) {
        //assign user value to higher level
        //Above is done automatically by useAuthentication

        window.location.href = "/account";
      }
    } catch (error) {
      //TODO: Report error on screen to user
      console.log("Error signing in:", error.message);
    }

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
    <button onClick={async () => await handleLogin()} className="WelcomeButton">
      login
    </button>
  );
}
