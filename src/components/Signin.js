import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { pkceContext } from "../Helper/Context";

const Signup = () => {
  const location = useLocation();
  const auth_code = new URLSearchParams(location.search).get("code");
  console.log("auth ocde : " + auth_code);

  const pkce = useContext(pkceContext);

  console.log(pkce);

  var verifier = pkce.pkVerifier;

  console.log("pkce verifier : " + verifier);

  // var bodyFormData = new FormData();

  // bodyFormData.append("client_id", "ACSVisitorManagement");
  // bodyFormData.append("code", auth_code);
  // bodyFormData.append("redirect_uri", "https://BIS:5706/signin");
  // bodyFormData.append("code_verifier", verifier);
  // bodyFormData.append("grant_type", "authorization_code");

  // for (var pair of bodyFormData.entries()) {
  //   console.log(pair[0] + " : " + pair[1]);
  // }

  return <div>signup page</div>;
};

export default Signup;
