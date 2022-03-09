/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./Done.css"
import p1 from "./check.png"
import Nav_side from "../../Nav_side";
import { Link } from "react-router-dom";
const Done = () => {

  return (
    <>
    <Nav_side/>
    <Link to="/list/edit_profile/done">
      <div class="square">
        <img src={p1} id="imgg" alt="imgg"/>
        <div class="content">

          <h1 class="h1">DONE </h1>
          <h5 class="h5">This Is Done</h5>

        </div>
      </div>
      </Link>
    </>
  );
};

export default Done;
