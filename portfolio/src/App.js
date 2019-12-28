import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header" />
        <Navbar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
