import { handleSignOut } from "../../services/authService";
export default function SignOutButton() {
  return (
    <button className="SignOutButton" onClick={() => handleSignOut()}>
      Sign Out
    </button>
  );
}
