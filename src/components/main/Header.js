import SignOutButton from "../auth/SignOutButton";
import "../../css/Header.css";
export default function Header(props) {
  return (
    <div className="Header">
      <img
        src={
          props.environment.resident.photoURL
            ? require(props.environment.resident.photoURL)
            : require("../../assets/profile-placeholder.png")
        }
        alt="Profile Picture"
      />
      <h1>coven</h1>
      <SignOutButton />
    </div>
  );
}
