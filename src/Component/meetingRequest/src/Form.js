/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";
import Img from "./Img1.jpg";
import "./Form.css";
import Nav_side from "../../Nav_side";


function Form() {
  return (
    <>
      <Nav_side />
      <div className="Maincontainer">
        <img id="img" src={Img} alt="Img" />
        <div className="Formcontainer">
          <div className="headingg">&nbsp;&nbsp;Meeting Information</div>
          <Input Placeholder="Username" />
          <Input Placeholder="Institude Name" />
          <Input Placeholder="Email Address" />
          <Input Placeholder="Contect Number" />
          <Input Placeholder="Website Link " />
          <Input Placeholder="Meeting Date" />
          <Input Placeholder="Post" />
          <Button title="send" />
        </div>
      </div>

    </>
  );
}

export default Form;
