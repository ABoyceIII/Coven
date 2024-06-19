import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import signInEmail from "../../services/authService";
export function LogInButton(props) {
  const handleLogin = async () => {
    try {
      const user = signInEmail(props.email, props.password);

      //If we have successfully retrieved a user from the signInEmail method
      if (user) {
        //assign user value to higher level

        window.location.href = "/dashboard";
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
    <button onClick={() => handleLogin()} className="WelcomeButton">
      login
    </button>
  );
}
