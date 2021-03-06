import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "./styles/App.scss";

ReactDOM.render(
  <Auth0Provider
    domain="sibi-app.us.auth0.com"
    clientId="cTTCfx3yAMrvfaeJHoUK3ARWPZNdiBkP"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
