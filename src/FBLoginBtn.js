import React from "react";
import FacebookLogo from "../src/logo/FacebookLogo";

const FBLoginBtn = ({ children, onClick }) => {
  return (
    <div>
      <FacebookLogo />
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default FBLoginBtn;
