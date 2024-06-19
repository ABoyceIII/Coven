import "../../css/Home.css";
import { SignInButton } from "../../components/SignInButton";
import { CreateAccountButton } from "../../components/CreateAccountButton";
/*
The Home page is the first thing a person will see when they launch the app. It just displays a welcome text, and provides the sign-in button.
*/
export default function Home() {
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
