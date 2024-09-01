import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInEmail } from "../../services/authService";
import { fetchResident } from "../../services/residentService";
export function LogInButton(props) {
  const handleLogin = async () => {
    try {
      const user = await signInEmail(props.email, props.password);
      //If we have successfully retrieved a user from the signInEmail method
      //console.log(user);
      if (user) {
        //assign user value to higher level
        //Above is done automatically by useAuthentication

        //Check if user has a residence
        try {
          let residentData = await fetchResident(user.uid);
          //If user has a residence, redirect to dashboard
          if (residentData.residenceReference) {
            window.location.href = "/dashboard";
          } else {
            //If user does not have a residence, redirect to welcome page
            window.location.href = "/account";
          }
        } catch (error) {
          //If an error occurs, just redirect to acount page
          window.location.href = "/account";
        }

        //window.location.href = "/account";
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
