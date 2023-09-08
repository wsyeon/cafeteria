import React from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import FBLoginBtn from "./FBLoginBtn";

const App = () => {
  return (
    <FacebookLogin
      appId={"259323000355849"}
      onSuccess={(response) => {
        console.log("Login Success!");
        console.log("id: ", response.id);
      }}
      onFail={(error) => {
        console.log("Login Failed!");
        console.log("status: ", error.status);
      }}
      onProfileSuccess={(response) => {
        console.log("Get Profile Success!");
        console.log("name: ", response.name);
      }}
      render={({ onClick }) => (
        <FBLoginBtn onClick={onClick}>facebook 로그인</FBLoginBtn>
      )}
    />
  );
};

export default App;
