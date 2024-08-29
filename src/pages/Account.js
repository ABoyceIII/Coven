import { useEffect, useState } from "react";
import "../css/Account.css";
import Resident from "../classes/resident";
import {
  fetchResident,
  createFirebaseResident,
  generateResident,
} from "../services/residentService";
export default function Account(props) {
  const [isEditActive, setIsEditActive] = useState(false);
  const [resident, setResident] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const [debug, setDebug] = useState(false);

  useEffect(() => {
    console.log(props);
  }, [props]);

  useEffect(() => {
    console.log("Resident:");
    console.log(resident);
  }, [resident]);

  useEffect(() => {
    async function loadResident() {
      if (props.user) {
        //TODO: catch errors here

        let residentData = await fetchResident(props.user.uid); //right now, the user isn't properly loaded (at least at initial loading of page) so there isn't a user.uid field
        console.log(residentData);
        setFullName(residentData.fullName);
        setDisplayName(residentData.displayName);
        setPhotoURL(residentData.photoURL);

        let data = {
          fullName: fullName,
          displayName: displayName,
          uid: props.user.uid,
          emailAddress: props.user.email,
          photoURL: photoURL,
        };
        //var resident = await createFirebaseResident(props.user.uid, data);
        let generatedResident = generateResident(data);
        console.log(generatedResident);
        setResident(generatedResident);
        console.log(resident);
        //May throw errors if fullName and displayName fields aren't created when blank account is generated.
      }
    }

    loadResident();
  }, [props]);

  useEffect(() => {
    if (resident) {
      setFullName(resident.fullName);
      setDisplayName(resident.displayName);
      setIsLoading(false);
    }
  }, [resident]);

  // When page is loaded, check props.
  // If props has a resident, load resident.
  // If props has no resident, fetch resident info from user and load resident from that info.

  // useEffect(() => {
  //   if (props.resident) {
  //     setResident(props.resident);
  //   } else if (props.user) {
  //     //make new resident from user info
  //     //set resident
  //   } else {
  //     //No resident, no user
  //     //Send Error Message
  //   }
  // }, []);

  //DEBUG STUFF
  useEffect(() => {
    if (debug) {
      var resi = new Resident(
        "Allen",
        "allenboyceiii@gmail.com",
        "Allen Boyce"
      );
      resi.photoURL =
        "https://lh3.googleusercontent.com/ogw/AF2bZyjtz9wNsY-y34KSgIMlIuBxWsahXnTbWsBz7dz-GdUmuw=s32-c-mo";
      setResident(resi);
      setIsLoading(false);
      setIsEditActive(true);
    }
  }, []);

  return (
    <div className="Account">
      <div className="Panel">
        {/* If no user loaded, then loading screen */}

        {isLoading ? (
          <div className="Loading">
            <img
              src={require("../assets/loading/loading-opaque.gif")}
              alt="loading animation"
            />
          </div>
        ) : (
          <div>
            {!resident ? (
              // This occurs when loading has finished but there is still no resident.
              <h2>an error has occurred. please log in again.</h2>
            ) : (
              <div className="AccountPanel">
                {/* IMAGE SRC DOESN'T FUNCTION */}
                <img src={resident.photoURL} alt="" className="UserPfp" />
                <div className="AccountFields">
                  <div>
                    {!isEditActive ? (
                      <div>
                        <p>Display Name: </p>
                        <p>{resident.displayName}</p>
                        <p>Full Name: </p>
                        <p>{resident.fullName}</p>
                        <p>Email Address: </p>
                        <p>{resident.emailAddress}</p>
                      </div>
                    ) : (
                      <div>
                        <p>Display Name: </p>
                        <input type="text" value={resident.displayName} />
                        <p>Full Name: </p>
                        <input type="text" value={resident.fullName} />
                        <p>Email Address: </p>
                        {/* <input type="text" value={resident.emailAddress} /> */}
                        <p>{resident.emailAddress}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  {isEditActive ? (
                    <div>
                      <button>SAVE</button>
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => {
                          setIsEditActive(true);
                        }}
                      >
                        EDIT
                      </button>
                    </div>
                  )}
                </div>
                <div>
                  {resident.residence ? (
                    <div>
                      <button>GO TO DASHBOARD</button>
                    </div>
                  ) : (
                    <div>
                      <h2>
                        you haven't been assigned to a residence. would you like
                        to create or join one?
                      </h2>
                      <div>
                        <button>join</button>
                        <button>create</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
