/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import axios from "axios";
// import Button from "./Components/Button";
import "./Form.css";
import Nav_side from "../Nav_side";

function Intvrequest() {


  const [intvRequest, setUser] = useState({
    intvName: "",
    intvEmail: "",
    meetLink: "",
    compName: "",
    date: "",
    time: "",
    invitedStudent: "",
    sortMsg: "",

  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...intvRequest,
      [name]: value
    })
  }

  const SendRequest = () => {
    const { intvName, intvEmail, meetLink, compName, date, time, invitedStudent, sortMsg } = intvRequest
    if (intvName && intvEmail && meetLink && compName && date && time && invitedStudent && sortMsg) {
      axios.post("http://localhost:9000/sendRequest", intvRequest)
        .then(res => {
          // alert(res.data.message)
          alert(`Database Added...`);
        })
    } else {
      alert("invlid input")
    }
    console.log("hiii");

  }

  return (
    <>
      <Nav_side />
      <div className="formContainer">
        <h3 className="heading">Interview Request</h3>
        <div className="form">
          <div className="inputControl">
            <label>Name</label>
            <input className="inputField" type="text" placeholder="Interviewer" name="intvName" value={intvRequest.intvName} onChange={handleChange} />
          </div>
          <div className="inputControl">
            <label>Email</label>
            <input className="inputField" type="text" placeholder="example@domain.xyz" name="intvEmail" value={intvRequest.intvEmail} onChange={handleChange}
            />
          </div>
          <div className="inputControl">
            <label>Meeting Link</label>
            <input className="inputField" type="text" placeholder="https://example.com" name="meetLink" value={intvRequest.meetLink} onChange={handleChange}
            />
          </div>
          <div className="inputControl">
            <label>Company</label>
            <input className="inputField" type="text" placeholder="Ex. Wipre, TCS" name="compName" value={intvRequest.compName} onChange={handleChange}
            />
          </div>
          <div className="inputControl">
            <label>Date</label>
            <input className="inputField" type="date" name="date" value={intvRequest.date} onChange={handleChange} />
          </div>
          <div className="inputControl">
            <label>Time</label>
            <input className="inputField" type="time" name="time" value={intvRequest.time} onChange={handleChange} />
          </div>
          <div className="inputControl">
            <input className="inputField" type="text" placeholder="Invited Student" name="invitedStudent" value={intvRequest.invitedStudent} onChange={handleChange}
            />
          </div>
          <div className="inputControl">
            <label>Short Message</label>
            <textarea className="textarea" placeholder="Short Message" name="sortMsg" value={intvRequest.sortMsg} onChange={handleChange} />
          </div>
        </div>
        <button className="btn" onclick={SendRequest()}>Send</button>
      </div>
    </>
  );
}

export default Intvrequest;
