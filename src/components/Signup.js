import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Signup = (pkce) => {
  const location = useLocation();
  const auth_code = new URLSearchParams(location.search).get("code");
  // console.log(auth_code);
  const [items, setItems] = useState(null);

  useEffect(() => {
    // const items = localStorage.getItem("ver");
    // if (items) {
    //   setItems(items);
    // }
    console.log("signup page" + localStorage.getItem("pkce"));
  }, []);

  console.log("signup page" + localStorage.getItem("pkce"));

  var body = {
    client_id: "ACSVisitorManagement",
    code: auth_code,
    redirect_uri: "https://BIS:5706/signin",
  };

  axios({
    method: "post",
    url: "https://bis/BisIdService/connect/token",
    data: body,
  });

  return <div>signupuohy</div>;
};

export default Signup;
