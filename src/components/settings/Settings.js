import React from "react";
import { StyledSettings } from "../../styles/StyledSettings";

export default function Settings() {
  return (
    <StyledSettings className="container">
      <h4 className="my-settings">Settings</h4>
      <div className=" opt mb-3">
        <label className=" language form-label">Language</label>
        <select selected className="select">
          <option value="1">English</option>
          <option value="2">Uzbek</option>
          <option value="3">Russia</option>
        </select>
      </div>
    </StyledSettings>
  );
}

{
  /* <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select> */
}
