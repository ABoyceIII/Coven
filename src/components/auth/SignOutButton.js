import { signOut } from "firebase/auth";

export function SignOutButton() {
  const onSignOut = async (auth) => {
    try {
      await signOut(auth).then(() => (window.location.href = `/`));
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <button className="SignOutButton" onClick={() => onSignOut(auth)}>
      Sign Out
    </button>
  );
}
