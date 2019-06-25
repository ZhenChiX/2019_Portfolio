import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import { ThemeProvider, createTheme } from "arwes";
import { Puffs } from "arwes";
import Footer from "./components/footer/footer";

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <div>
        {/* <Puffs quantity={10}> */}
        <div className="App">
          <header className="App-header" />
          <Navbar />
        </div>
        <Footer />
        {/* </Puffs> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
