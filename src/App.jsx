import { useState } from "react";
import "./App.css";
import MovTabs from "./Component/mov.jsx";
import ThemeState from "./Context/ThemeState.jsx";

function App() {


  return (
    <ThemeState>
      <MovTabs />
    </ThemeState>
  );
}

export default App;