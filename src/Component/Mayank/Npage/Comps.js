/* eslint-disable react/jsx-pascal-case */
import React from "react";
import cdt from "./cloudiate.jpeg";
import inf from "./infosys.png";
import wpr from "./wipro.jpg";
import tmd from "./techMahindra.jpg";
import tcs from "./tcs.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "./Comps.css";
import Nav_side from "../../Nav_side";
const ListOfCompanies = () => {
  return (
    <>
    <Nav_side/>
      <div class="containerr">
        <div>
          <h1 id="headd">Companies</h1>
        </div>
        <div id="mainn" className="row">
          <div className="div4">
            <img className="pic" src={wpr} alt="" />
            <h6 className="textt">Wipro</h6>
          </div>

          <div className="div4">
            <img className="pic" src={cdt} alt="" />
            <h6 className="textt">Cloudiate</h6>
          </div>

          <div className="div4 col-xl-12">
            <img className="pic" src={inf} alt="" />
            <h6 className="textt">infosys</h6>
          </div>

          <div className="div4 col-xl-12">
            <img className="pic" src={tmd} alt="" />
            <h6 className="textt">TechMahindra</h6>
          </div>

          <div className="div4 col-xl-12">
            <img className="pic" src={tcs} alt="" />
            <h6 className="textt">TCS</h6>
          </div>
          <div className="div4 col-xl-12">
            <img className="pic" src={wpr} alt="" />
            <h6 className="textt">Wipro</h6>
          </div>

          <div className="div4 col-xl-12">
            <img className="pic" src={cdt} alt="" />
            <h6 className="textt">Cloudiate</h6>
          </div>

          <div className="div4 col-xl-12 div4 col-xl-12+">
            <img className="pic" src={inf} alt="" />
            <h6 className="textt">infosys</h6>
          </div>

          <div className="div4 col-xl-12 div4 col-xl-12+">
            <img className="pic" src={tmd} alt="" />
            <h6 className="textt">TechMahindra</h6>
          </div>

          <div className="div4 col-xl-12 div4 col-xl-12+">
            <img className="pic" src={tcs} alt="" />
            <h6 className="textt">TCS</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListOfCompanies;
