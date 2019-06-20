import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Portfolios from "./components/portfolios/portfolios";
import Navbar from "./components/navbar/navbar";
import { ThemeProvider, createTheme } from "arwes";
import { Puffs } from "arwes";
import Footer from "./components/footer/footer";

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Puffs quantity={44}>
        <div className="App">
          <header className="App-header" />
          <Navbar />
          <Footer />
        </div>
      </Puffs>
    </ThemeProvider>
  );
}

export default App;
