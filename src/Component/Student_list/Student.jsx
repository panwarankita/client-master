/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import Searchbar from './Searchbar';
import Nav_side from "../Nav_side";
import { Link } from "react-router-dom"
import './button.css'


function Student() {
  const [data, setData] = useState([]);


  useEffect(() => {
    
    fetch("https://iteg.herokuapp.com/api/Student_Reg/List").then((result) => {
      result.json().then((response) => {
        console.log("result", response)
        setData(response.data);
      });
    });
  }, []);
  console.log(data);
  return (
    <>
      <Nav_side />
      <Searchbar />
      <br></br>
      {/* <br></br> */}
      <div>
        <table id="tb" className="table col-12 table-borderrd table-striped mb-0  containear-sm table-wrapper-scroll-y my-custom-scrollbar">
          <thead>
            <tr className="border">

              <th> Student Name</th>
              <th>Skill's</th>
              <th >Catagoury</th>
              <th>Progress</th>
              <th >Status</th>
              <th >Operation</th>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th width="" >Action</th>
              <th>&nbsp;&nbsp;</th>


            </tr>
          </thead>
          {
            data.map((item) => (

              <tr className="border1" >

                <td>{item.FirstName}</td>
                <td>{item.Email}</td>
                <td>{item.LastName}</td>
                <td>{item.Course}</td>
                <td>{item.Role}</td>
                <td><span><Link to="/editProfile"><BsPencil /></Link>&nbsp;&nbsp;&nbsp;<RiDeleteBin6Line /></span></td>
                <td></td>
                <td><button id="view">View</button></td>
              </tr>
            ))
          }

        </table>
      </div>
    </>


  );
}

export default Student;

