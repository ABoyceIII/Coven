import { useEffect, useState, useContext } from "react";
import "../css/Account.css";
import Resident from "../classes/resident";
import {
  fetchResident,
  createFirebaseResident,
  generateBaseResident,
  updateFirebaseResident,
} from "../services/residentService";
import SignOutButton from "../components/auth/SignOutButton";
import { useNavigate } from "react-router-dom";
import EnvironmentContext from "../App";
export default function Account(props) {
  //TODO: Tidy TF up

  // const { environment, updateEnvironment } = useContext(EnvironmentContext);
  // const navigate = useNavigate();

  const [isEditActive, setIsEditActive] = useState(false);
  const [resident, setResident] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const [fullName, setFullName] = useState("loading");
  const [displayName, setDisplayName] = useState("loading");
  const [photoURL, setPhotoURL] = useState("loading");

  const [debug, setDebug] = useState(false);

  useEffect(() => {
    console.log(props);
  }, []);

  useEffect(() => {
    console.log("Resident:");
    console.log(resident);
  }, [resident]);

  useEffect(() => {
    async function loadResident() {
      if (props.user) {
        //TODO: catch errors here
        //console.log(props.user);
        let residentData = await fetchResident(props.user.uid);
        console.log(residentData);

        setFullName(residentData.fullName);
        setDisplayName(residentData.displayName);
        setPhotoURL(residentData.photoURL);
        let generatedResident = generateBaseResident(residentData);
        //console.log(generatedResident);

        props.updateEnvironment("resident", generatedResident);

        setResident(generatedResident);
      }
    }

    loadResident();
  }, [props]);

  useEffect(() => {
    if (resident) {
      // setFullName(resident.fullName);
      // setDisplayName(resident.displayName);
      // setPhotoURL(resident.photoURL);
      setIsLoading(false);
    }
  }, [resident]);

  const handleSave = async () => {
    //Avoid doubling up
    if (!isSaving) {
      setIsSaving(true);
      let saveData = { fullName: fullName, displayName: displayName };

      try {
        await updateFirebaseResident(resident.uid, saveData);
        resident.fullName = fullName;
        resident.displayName = displayName;
        props.environment.resident.fullName = fullName;
        props.environment.resident.displayName = displayName;
      } catch (error) {
        console.error("ERROR while saving data: ", error);
      }
      setIsSaving(false);
      setIsEditActive(false);
    }
  };

  //DEBUG STUFF
  useEffect(() => {
    if (debug) {
      var resi = new Resident(
        "Allen",
        "allenboyceiii@gmail.com",
        "Allen Boyce",
        "1234567890",
        "https://lh3.googleusercontent.com/ogw/AF2bZyjtz9wNsY-y34KSgIMlIuBxWsahXnTbWsBz7dz-GdUmuw=s32-c-mo"
      );
      setResident(resi);
      setIsLoading(false);
      setIsEditActive(true);
    }
  }, []);

  return (
    <div className="Account">
      <h1>
        {!isLoading && resident ? (
          <div>welcome home, {resident.displayName}</div>
        ) : (
          "welcome home."
        )}
      </h1>
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
              <div className="AccountPage">
                <div className="AccountPanel">
                  {/* IMAGE SRC DOESN'T FUNCTION */}
                  <img src={resident.photoURL} alt="" className="UserPfp" />
                  <div className="AccountFields">
                    <div>
                      <p>Display Name: </p>
                      {isEditActive ? (
                        <input
                          type="text"
                          value={displayName}
                          onChange={(e) => setDisplayName(e.target.value)}
                        />
                      ) : (
                        <p>{resident.displayName}</p>
                      )}
                      <p>Full Name: </p>
                      {isEditActive ? (
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      ) : (
                        <p>{resident.fullName}</p>
                      )}
                    </div>
                    <p>Email: {resident.emailAddress}</p>
                  </div>
                  <div>
                    {isEditActive ? (
                      <div>
                        <button
                          onClick={() => {
                            handleSave();
                          }}
                        >
                          SAVE
                        </button>
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
                          you haven't been assigned to a residence. would you
                          like to create or join one?
                        </h2>
                        <div>
                          <button>join</button>
                          <button
                            onClick={() => {
                              window.location.href = "/create-residence";
                            }}
                          >
                            create
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <SignOutButton />
    </div>
  );
}
