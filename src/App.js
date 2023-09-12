import React from "react";
import AppleSignIn from "react-apple-login";

function App() {
  return (
    <div>
      {/* <h1>애플 로그인 예제</h1>
      <AppleSignIn
        clientId="com.mise.cheryexam" // Apple 개발자 포털에서 생성한 클라이언트 ID로 변경
        redirectURI="https://www.cheryexam.com/login/api/oauth/callback/apple" // 콜백 URL 설정
        responseType="code id_token"
        scope="email name"
        responseMode="form_post"
        usePopup={false} // 팝업 사용 여부
        callback={(res) => console.log(res)}
      /> */}
    </div>
  );
}

export default App;
