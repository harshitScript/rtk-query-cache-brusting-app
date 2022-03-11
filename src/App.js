// SEE store.js FILE
import React, { useState } from "react";
import "styled-components/macro";
import "./App.css";
import BrowserIdleAutomation from "./Automations/browser-idle-automation";
import SampleComponent from "./Components/SampleComponent";
import { Helmet } from "react-helmet";
import CacheBuster from "react-cache-buster";
import packageJson from "../package.json";

function App() {
  const [display, setDisplay] = useState(undefined);
  return (
    <CacheBuster
      currentVersion={packageJson?.version}
      isEnabled
      isVerboseMode={true}
      loadingComponent={
        <div
          css={`
            height: 100vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <p>Busting cache....</p>
        </div>
      }
    >
      <BrowserIdleAutomation>
        <>
          <Helmet>
            <title>RTK-query,Cache busting app</title>
          </Helmet>
          <h1
            css={`
              text-align: center;
            `}
          >
            The Rtk-Query and Cache Busting Demonstration
          </h1>
          <b
            css={`
              margin: 10px;
            `}
            onClick={setDisplay.bind(null, "Fetch")}
          >
            Fetch data
          </b>
          {/* <button
        css={`
          margin: 10px;
        `}
        onClick={setDisplay.bind(null, "Documentation")}
      >
        Documentation
      </button> */}
          {display && (
            <SampleComponent
              displayLabel={display}
              onClose={setDisplay.bind(null, undefined)}
            />
          )}
        </>
      </BrowserIdleAutomation>
    </CacheBuster>
  );
}

export default App;

//! MAIN REQUIREMENTS
//* createApi => creates our customized api slice.
//* fetchBaseQuery => base query builder for ease lof requests.
//* configureStore => To create our redux store for state management.
//* setupListeners => To watch components lifecycle.

//! WRITING OWN SCRIPT IN REACT(package.json)
//"scripts": {
//  "start": "react-scripts start",
//  "build": "npm run generate-meta-tag && react-scripts build",
//  "test": "react-scripts test",
//  "eject": "react-scripts eject",
//  "app-version-check": "node ./app-version-check",  //? define file location  <location_alias> : <command(in terms of node)>
//  "preBuild": "npm run app-version-check", //? define npm script  <script_alias> : <command(in terms of npm)>
//  "generate-meta-tag": "node ./node_modules/react-cache-buster/dist/generate-meta-tag.js"
//}
