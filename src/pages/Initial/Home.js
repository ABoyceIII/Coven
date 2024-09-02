import "../../css/Home.css";
import { SignInButton } from "../../components/auth/SignInButton";
import { CreateAccountButton } from "../../components/auth/CreateAccountButton";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import EnvironmentContext from "../../App";

/*
The Home page is the first thing a person will see when they launch the app. It just displays a welcome text, and provides the sign-in button.
*/
export default function Home() {
  // const { environment } = useContext(EnvironmentContext);
  // const navigate = useNavigate();

  return (
    <div className="Home">
      <h2>welcome to coven</h2>
      <div className="RedirectButtons">
        <SignInButton />
        <CreateAccountButton />
      </div>
    </div>
  );
}
