import React, { useEffect, useState } from "react";
import getPkce from "oauth-pkce";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Nav from "./Nav";
function App() {
  // const [pkce, setPkce] = useState({});
  // const [token, setToken] = useState(null);

  // useEffect(() => {
  //   // getPkce relies on the window object for its crypto api
  //   // put in in useEffect
  //   getPkce(50, (error, { verifier, challenge }) => {
  //     setPkce({ verifier, challenge });
  //   });
  // }, []);

  // var callBackUrl = `https://bis/BisIdService/connect/authorize/callback?client_id=ACSVisitorManagement&redirect_uri=https://BIS:5706/signin&response_type=code&scope=openid profile offline_access vmapi&state=3111731d32224f3197f9b6c53bf0cda8&code_challenge=${pkce.challenge}&code_challenge_method=S256&ui_locales=en-US&response_mode=query`;
  // console.log(callBackUrl);

  // window.location.replace(callBackUrl);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/signin" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
