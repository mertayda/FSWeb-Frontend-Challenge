import { useState } from "react";

import "./App.css";
import FirstPage from "./components/FirstPage";

import Skills from "./components/Skills";
import Profile from "./components/Profile";
import "./index.css";

function App() {
  return (
    <>
      <FirstPage></FirstPage>
      <Skills></Skills>
      <Profile></Profile>
    </>
  );
}

export default App;
