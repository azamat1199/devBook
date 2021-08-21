import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { StyledSettingsDiv } from "../../styles/StyledSettings";
import Account from "./Account";
import Settings from "./Settings";
import Security from "./Security";

export default function MainSettings() {
  const [active, setActive] = useState("settings");

  const comps = {
    account: <Account />,
    settings: <Settings />,
    security: <Security />,
  };

  return (
    <>
      <StyledSettingsDiv className="container-fluid">
        <div
          onClick={() => setActive("account")}
          className={`my-account ${active === "account" ? "active" : ""}`}
        >
          <div className="act d-flex">
            <span className="one">1</span>
            <h5>My Account</h5>
          </div>
        </div>
        <div
          onClick={() => setActive("security")}
          className={`security ${active === "security" ? "active" : ""}`}
        >
          <div className="act d-flex">
            <div className="two">
              {" "}
              <h5>2</h5>
            </div>
            <h5>Security</h5>
          </div>
        </div>
        <div
          onClick={() => setActive("settings")}
          className={`settings ${active === "settings" ? "active" : ""}`}
        >
          <div className="act d-flex">
            <div className="three">
              {" "}
              <h5>3</h5>
            </div>
            <h5>Settings</h5>
          </div>
        </div>
      </StyledSettingsDiv>
      {comps[active]}
    </>
  );
}
