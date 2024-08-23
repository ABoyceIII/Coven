import { useEffect, useState } from "react";
import "../css/Account.css";
export default function Account(user) {
  const [isEditActive, setIsEditActive] = useState(false);
  const [resident, setResident] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <div className="Account">
      <div className="Panel">
        {/* If no user loaded, then loading screen */}

        {isLoading ? (
          <div className="loading">
            <img
              src="../assets/loading/loading-opaque.gif"
              alt="loading animation"
            />
          </div>
        ) : (
          <div className="AccountPanel"></div>
        )}

        <img src="" alt="" className="UserPfp" />
        <div className="AccountFields"></div>
      </div>
    </div>
  );
}
