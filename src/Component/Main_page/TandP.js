/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { ImProfile } from "react-icons/im";
import { MdModelTraining, MdCastForEducation } from "react-icons/md";
import { BsShieldFillPlus } from "react-icons/bs";
import { AiOutlineLineHeight } from "react-icons/ai";
import Nav_side from "../Nav_side";
import { Link } from "react-router-dom";
import R from "./R2.png";
import L from "./L2.png";
import "bootstrap/dist/css/bootstrap.css";
import "./TandP.css";
const TandP = () => {
  return (
    <>
      <Nav_side />
      {/* <div > */}
      <div className="containerrr">
        <div id="RowDiv" className="row">
          {/* <div id="Idiv1" className="col-6 col-sm-6 col-md-10 col-lg-6 col-xl-6"><img id="i1" src={L} /></div>
            <div id="Idiv2" className="col-1 col-sm-1 col-md-10 col-lg-1 col-xl-1"></div>
            <div id="Idiv3" className="col-4 col-sm-4 col-md-10 col-lg-4 col-xl-4"><img id="i2" src={R} /></div> */}
          {/* <div id="Dinvisible"><img id="Iinvisible" src={R} /></div> */}
          <div id="d1" className="col-sm-5 col-md-5 col-lg-5 col-xl-6"><img id="i1" src={L} /></div>
          <div id="d2" className="col-sm-5 col-md-5 col-lg-5 col-xl-4"><img id="i2" src={R} /></div>
        </div>
      </div>
      {/* <img id="topimg" src={img1} style={{ width: "100%" }} alt="..." /> */}
      <div class="containerrr">

        <div id="main" className="row">
          <div className="div3 ">
            <ImProfile className="pro"></ImProfile>
            <h6 className="text"><Link class="Link" to="/listOfStudent">Student List</Link></h6>
          </div>

          <div className="div3">
            <MdCastForEducation className="pro"></MdCastForEducation>
            <h6 className="text"><Link class="Link" to="/listOfCompanies">List Of Companies</Link></h6>
          </div>

          <div className="div3">
            <BsShieldFillPlus className="pro"></BsShieldFillPlus>
            <h6 className="text">
              <Link class="Link" to="/Placedstudent">List Of Placed Student</Link></h6>
          </div>

          <div className="div3">
            <MdModelTraining className="pro"></MdModelTraining>
            <h6 className="text"><Link class="Link" to="/trainingList"> List Of Training</Link></h6>
          </div>

          <div className="div3">
            <AiOutlineLineHeight className="pro"></AiOutlineLineHeight>
            <h6 className="text"><Link class="Link" to="/meetingRequest">Provide Training</Link></h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default TandP;
