import React from "react";
import Separator from "../img/Separator.svg";
import { StyledSecurity } from "../../styles/StyledSettings";

export default function Settings() {
  return (
    <StyledSecurity className="container-fluid">
      <h4 className="change">Change Or Recover Your Password:</h4>
      <div className="">
        <label className="scrt-email form-label">Email</label>
        <input
          type="email"
          className="security-email"
          placeholder="admin@mail.ru"
        />
      </div>
      <div className="">
        <label className="scrt-email form-label">Password</label>
        <input
          type="password"
          className="current-password"
          placeholder="*********"
        />
      </div>
      <div className="d-flex">
        <div className="pswrd">
          <label className="scrt-password form-label">Password</label>
          <input
            type="password"
            className="new-password"
            placeholder="*********"
          />
        </div>
        <div className="">
          <label className="scrt-password form-label">Confirm Password</label>
          <input
            type="password"
            className="confirm-password"
            placeholder="*********"
          />
        </div>
      </div>
      <div className="mt-4 mb-4">
        <img src={Separator} alt="line" />
      </div>
      <div>
        <button className="save">Save Changes</button>
      </div>
    </StyledSecurity>
  );
}
