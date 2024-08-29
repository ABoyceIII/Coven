import { useState } from "react";

import "../css/CreateResidence.css";
export default function CreateResidence(props) {
  const [name, setName] = useState("");

  //TODO: Implement sase of no user

  return (
    <div className="CreateResidence">
      <h2>what would you like to call your new home?</h2>
      <input
        type="text"
        value={name}
        placeholder="residence name"
        onChange={(e) => setName(e.target.value)}
      />
      <button>create</button>
      <button
        onClick={() => {
          window.location.href = "/account";
        }}
      >
        back
      </button>
    </div>
  );
}
