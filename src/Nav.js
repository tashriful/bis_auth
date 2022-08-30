import React, { useContext, useEffect, useState } from "react";
import getPkce from "oauth-pkce";
import { Route, Redirect } from "react-router";
import { pkceContext } from "./Helper/Context";

function Nav() {
  const pkce = useContext(pkceContext);

  console.log(pkce);

  var challenge = pkce.pkChallange;

  console.log("pkce challege : " + challenge);

  var callBackUrl = `https://bis/BisIdService/connect/authorize/callback?client_id=ACSVisitorManagement&redirect_uri=https://BIS:5706/signin&response_type=code&scope=openid profile offline_access vmapi&state=3111731d32224f3197f9b6c53bf0cda8&code_challenge=${challenge}&code_challenge_method=S256&ui_locales=en-US&response_mode=query`;
  console.log(callBackUrl);

  window.location.replace(callBackUrl);

  return (
    <div>
      <h1>Nav</h1>
    </div>
  );
}

export default Nav;
