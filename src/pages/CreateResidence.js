import { useState } from "react";

import Residence from "../classes/residence";

import "../css/CreateResidence.css";
import { createFirebaseResidence } from "../services/residenceService";
import { updateFirebaseResident } from "../services/residentService";
export default function CreateResidence(props) {
  const [name, setName] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  //TODO: Implement case of no user

  const handleClick = async () => {
    console.log("clicked");
    await handleCreate();
  };

  const handleCreate = async () => {
    //Avoid doubling up
    if (!isLoading) {
      if (validateName()) {
        console.log("valid name");
        setIsLoading(true);
        try {
          //create new residence
          let residenceData = {
            name: name,
            ownerUID: props.user.uid,
          };
          //Create residence document
          let residenceRef = await createFirebaseResidence(residenceData);
          console.log("flag 34", residenceRef);
          //assign user to residence by updating user document to include reference to residence
          await updateFirebaseResident(residenceData.ownerUID, {
            residenceReference: residenceRef,
          });
          setIsLoading(false);
          //redirect to dashboard page
          window.location.href = "/dashboard";

          //if errors, disable loading and show
        } catch (error) {
          setIsLoading(false);
          console.error(error);
          //further handle error
        }
      }
    }
  };

  const validateName = () => {
    if (name == "") {
      console.error("residence name cannot be empty");
      return false;
    }
    return true;
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
      <button onClick={handleClick}>create</button>
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
