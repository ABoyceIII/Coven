import SignOutButton from "../auth/SignOutButton";
import "../../css/Header.css";
import { useEffect } from "react";
export default function Header(props) {
  useEffect(() => {
    console.log("Header Props:", props);
  }, []);

  return (
    <div className="Header">
      <img
        src={
          props.environment.resident
            ? props.environment.resident.photoURL
              ? require(props.environment.resident.photoURL)
              : require("../../assets/profile-placeholder.png")
            : require("../../assets/profile-placeholder.png")
        }
        alt="Profile Picture"
      />
      <h1>coven</h1>
      <SignOutButton />
    </div>
  );
}
