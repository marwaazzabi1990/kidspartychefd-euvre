import React, { Component } from "react";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";
import Index from "./Components/index";
import Index2 from "./Components/index2";
import Event_list from "../src/Components/evenement/event_list";

import Navbar from "./Components/Navbar/navbar";

var token = localStorage.getItem("token");

const Test = () => {
  if (token !== null) {
    return <Index />;
  } else return <Event_list />;
};
export default Test;
