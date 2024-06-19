/*
Redirects the user to the login page
*/
export function SignInButton() {
  const redirect = async () => {
    window.location.href = `/login`;
  };

  return (
    <button onClick={() => redirect()} className="WelcomeButton">
      sign in
    </button>
  );
}
