import React, { useEffect, useState } from "react";
import getPkce from "oauth-pkce";
import { Route, Redirect } from "react-router";

function Nav() {
  const [pkce, setPkce] = useState({});
  const [token, setToken] = useState(null);

  const myInitObject = {};

  useEffect(() => {
    // getPkce relies on the window object for its crypto api
    // put in in useEffect

    getPkce(50, (error, { verifier, challenge }) => {
      setPkce({ verifier, challenge });
      let temp = { verifier, challenge };
      localStorage.setItem("pkce", temp.verifier);
    });
  }, []);

  var callBackUrl = `https://bis/BisIdService/connect/authorize/callback?client_id=ACSVisitorManagement&redirect_uri=https://BIS:5706/signin&response_type=code&scope=openid profile offline_access vmapi&state=3111731d32224f3197f9b6c53bf0cda8&code_challenge=${pkce.challenge}&code_challenge_method=S256&ui_locales=en-US&response_mode=query`;
  console.log(callBackUrl);

  var a = pkce.verifier;
  var b = pkce.challenge;
  console.log("verifierrrrrrr");
  console.log(a);
  console.log("chalangeeeeeeeee");
  console.log(b);

  window.location.replace(callBackUrl);

  return (
    <div>
      <h1>Nav</h1>
    </div>
  );
}

export default Nav;
