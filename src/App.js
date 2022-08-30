import React, { useEffect, useState } from "react";
import getPkce from "oauth-pkce";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Nav from "./Nav";
import { pkceContext } from "./Helper/Context";

function App() {
  const [pkce, setPkce] = useState({});

  useEffect(() => {
    // getPkce relies on the window object for its crypto api
    // put in in useEffect
    getPkce(50, (error, { verifier, challenge }) => {
      setPkce({ verifier, challenge });
    });
  }, []);

  const pkceItems = {
    pkVerifier: pkce.verifier,
    pkChallange: pkce.challenge,
  };

  return (
    <pkceContext.Provider value={pkceItems}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </pkceContext.Provider>
  );
}

export default App;
