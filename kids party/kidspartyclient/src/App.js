import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Index from "./Components/index";
import { BrowserRouter } from "react-router-dom";
import Test from "../src/TESTT";
import Navbar from "../src/Components/Navbar/navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        {/*} <Navbar />*/}
        <Index />
      </div>
    </BrowserRouter>
  );
}

export default App;
