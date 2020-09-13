import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Index from "./Components/index";
import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
} from "react-router-dom";
import Test from "../src/TESTT";
import Navbar from "../src/Components/Navbar/navbar";
import NotFound from "../src/Components/notFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        {/*} <Navbar />*/}
        <Index />
        <Router>
          <Route exact path="/NOTFOUND">
            <NotFound />
          </Route>
        </Router>
      </div>
    </BrowserRouter>
  );
}

export default App;
