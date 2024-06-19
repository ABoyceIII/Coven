import { useState } from "react";

export default function CreateAccount() {
  const [isJoining, setIsJoining] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [response, setResponse] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="CreateAccount">
      <h2>please provide your email and password</h2>

      <input
        type="text"
        value={email}
        placeholder="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <h2 className="SetupInstruction">
        please confirm your account information. this information will only be
        accessible to the users who share your residence.
      </h2>
      <input
        type="text"
        placeholder="Display Name"
        onChange={(event) => {
          setDisplayName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Full Name"
        onchange={(event) => {
          setFullName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setResponse("");
          setIsJoining(true);
          setIsCreating(false);
        }}
      >
        join residence
      </button>
      <button
        onClick={() => {
          setResponse("");
          setIsJoining(false);
          setIsCreating(true);
        }}
      >
        create residence
      </button>
      {isJoining ? (
        <input
          type="text"
          placeholder="Join Code"
          value={response}
          onChange={(event) => setResponse(event.target.value)}
        />
      ) : isCreating ? (
        <input
          type="text"
          placeholder="Residence Name"
          value={response}
          onChange={(event) => setResponse(event.target.value)}
        />
      ) : (
        <h2 />
      )}
    </div>
  );
}
