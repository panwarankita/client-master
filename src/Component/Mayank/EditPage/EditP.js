/* eslint-disable react/jsx-pascal-case */
import React from "react";
import './EditP.css'
import Nav_side from "../../Nav_side";
import { Link } from "react-router-dom";
const EditP = () => {
  return (
    <>
    <Nav_side/>
      <div className=" fix d-flex justify-content-center ">
        <h4 class="mt-2 me-5">Edit Profile</h4>
        {/* <h4 class="fas fa-times-circle p-2"></h4> */}
      </div>
      <div class="position-relative topCstm">
        <form class="fix position-absolute start-50 translate-middle-x">
          <div class="mb-4">
            <label for="InputName" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control MQ"
              id="InputName"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="InputStatus" class="form-label">
              Status
            </label>
            <input type="text" class="form-control MQ" id="InputStatus" />
          </div>
          <div class="mb-3">
            <label for="InputSkill" class="form-label">
              Skills
            </label>
            <input type="text" class="form-control MQ" id="InputSkill" />
          </div>
          <div class="mb-3">
            <label for="InputCatagory" class="form-label">
              Catagory
            </label>
            <input type="text" class="form-control MQ" id="InputCatagory" />
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              style={{ backgroundColor: "#3c5898", border: "#3c5898" }}
              class=" btn btn-primary center-block"
            >
              <Link to="/listOfStudent">Save</Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditP;
