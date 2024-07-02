import { useState } from "react";

export default function AssignResidence(props) {
  const [isJoining, setIsJoining] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  return (
    <div className="AssignResidence">
      <h2>would you like to create a residence or join an existing one?</h2>
      <button
        className="WelcomeButton"
        onClick={() => {
          setResponse("");
          setIsJoining(true);
          setIsCreating(false);
        }}
      >
        join
      </button>
      <button
        className="WelcomeButton"
        onClick={() => {
          setResponse("");
          setIsJoining(false);
          setIsCreating(true);
        }}
      >
        create
      </button>
    </div>
  );
}
