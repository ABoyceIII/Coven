import { useState } from "react";

import "../css/CreateResidence.css";
export default function CreateResidence(props) {
  const [name, setName] = useState("");
  return (
    <div className="CreateResidence">
      <h2>what would you like to call your new home?</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
