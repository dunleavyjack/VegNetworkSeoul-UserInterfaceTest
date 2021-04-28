import React from "react";

const FacebookLogin = () => {
  return (
    <>
      <div
        class="fb-login-button"
        data-width=""
        data-size="large"
        data-button-type="continue_with"
        data-layout="default"
        data-auto-logout-link="false"
        data-use-continue-as="false"
      ></div>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0&appId=1351780385183146&autoLogAppEvents=1"
        nonce="EINQA4mR"
      ></script>
    </>
  );
};

export default FacebookLogin;
