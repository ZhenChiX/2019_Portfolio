import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Portfolios from "./components/portfolios/portfolios";
import Navbar from "./components/navbar/navbar";
import { ThemeProvider, createTheme } from "arwes";
import { Puffs } from "arwes";

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Puffs>
        <div className="App">
          <header className="App-header" />
          <Navbar />
          <Portfolios />

          <div style={{ width: "100%", height: "100%" }} />
        </div>
      </Puffs>
    </ThemeProvider>
  );
}

export default App;
