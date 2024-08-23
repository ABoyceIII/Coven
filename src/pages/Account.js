import { useEffect, useState } from "react";
import "../css/Account.css";
import Resident from "../classes/resident";
export default function Account(props) {
  const [isEditActive, setIsEditActive] = useState(false);
  const [resident, setResident] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    console.log(props.user);
  }, []);

  // When page is loaded, check props.
  // If props has a resident, load resident.
  // If props has no resident, fetch resident info from user and load resident from that info.

  useEffect(() => {
    if (props.resident) {
      setResident(props.resident);
    } else if (props.user) {
      //make new resident from user info
      //set resident
    } else {
      //No resident, no user
      //Send Error Message
    }
  }, []);

  //DEBUG STUFF
  useEffect(() => {
    var resi = new Resident("Allen", "allenboyceiii@gmail.com", "Allen Boyce");
    resi.photoURL =
      "https://lh3.googleusercontent.com/ogw/AF2bZyjtz9wNsY-y34KSgIMlIuBxWsahXnTbWsBz7dz-GdUmuw=s32-c-mo";
    setResident(resi);
    setIsLoading(false);
    setIsEditActive(true);
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
                <img src={resident.photoURL} alt="" className="UserPfp" />
                <div className="AccountFields">
                  <>
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
                        <input type="text" value={resident.emailAddress} />
                      </div>
                    )}
                  </>
                </div>
                <div>
                  {isEditActive ? (
                    <div>
                      <input type="button" value="SAVE" />
                    </div>
                  ) : (
                    <div>
                      <input
                        type="button"
                        value="EDIT"
                        onClick={() => {
                          setIsEditActive(true);
                        }}
                      />
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
