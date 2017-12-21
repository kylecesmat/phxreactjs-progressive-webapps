import React from "react";

export default ({ offline }) => (
  <div className={`connection connection--${offline ? "offline" : "online"}`}>
    {offline ? "We are offline" : "We are online"}
  </div>
);
