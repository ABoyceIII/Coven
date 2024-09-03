import EnvironmentContext from "../../App";

import { useContext, useEffect, useState } from "react";
import {
  fetchResident,
  generateResident,
} from "../../services/residentService";
import Header from "../../components/main/Header";
import Navbar from "../../components/main/Navbar";
import PageFrame from "../../components/main/PageFrame";
import "../../css/Dashboard.css";
export default function Dashboard(props) {
  //const { environment } = useContext(EnvironmentContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(props);
  }, [props]);

  useEffect(() => {
    const loadResident = async () => {
      console.log("Flag 18");
      //If there's a resident in the environment, we're chilling for now
      if (props.environment.resident) {
        console.log("Resident in environment.");
        setIsLoading(false);
      }
      //Otherwise fetch data and update environment
      else if (props.user) {
        console.log("Getting resident from user outside of environment.");

        let resident = await generateResident(props.user.uid);
        props.updateEnvironment("resident", resident); //resident not properly updated
        setIsLoading(false);

        console.log("Loaded Resident:", resident);
      }
      //No resident, no user, and everything loaded. Not gonna be getting any user.
      else if (!isLoading) {
        console.log("No user found.");
      }
    };
    if (isLoading) {
      loadResident();
    }
  }, [props]);

  const dashboardContent = (
    <div className="PageContent" id="DashboardContent">
      <h1>Dashboard</h1>
      <p>hello</p>
    </div>
  );

  return (
    <div className="AppPage" id="DashboardPage">
      {isLoading ? (
        <img
          src={require("../../assets/loading/loading-transparent.gif")}
          alt=""
        />
      ) : (
        <div>
          <PageFrame
            environment={props.environment}
            content={dashboardContent}
          />
        </div>
      )}
    </div>
  );
}
