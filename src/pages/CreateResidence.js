import { useState } from "react";

import "../css/CreateResidence.css";
export default function CreateResidence(props) {
  const [name, setName] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  //TODO: Implement case of no user

  const handleCreate = async () => {
    if (validateName()) {
      setIsLoading(true);
      //create new residence
      //assign user to residence
      //assign residence to user
      //if errors, disable loading and show
      //go to dashboard
    }
  };

  const validateName = () => {
    if (name == "") {
      console.error("residence name cannot be empty");
      return false;
    }
  };

  return (
    <div className="CreateResidence">
      <h2>what would you like to call your new home?</h2>
      <input
        type="text"
        value={name}
        placeholder="residence name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleCreate}>create</button>
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
