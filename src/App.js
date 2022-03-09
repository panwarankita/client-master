/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Nav_side from './Component/Nav_side';


import TandP from './Component/Main_page/TandP';
import Notification from './Component/Notification/Notification';
import Student from './Component/Student_list/Student';
import EditP from './Component/Mayank/EditPage/EditP';
import Done from './Component/Mayank/FDone/Done';
import ListOfCompanies from './Component/Mayank/Npage/Comps';
import MeetingRequest from './Component/meetingRequest/src/App';
import TrainingList from './Component/Training_List/card';
import Intvrequest from './Component/IntvRequest/Form';



function App() {
  return (
    <div className="mainontainer">
      {/* <Nav_side /> */}

      <div class="col-10 overview">
        <Routes>
          <Route exact path="" element={<TandP />} />
          <Route exact path="/main" element={<TandP />} />
          <Route exact path='/listOfStudent' element={<Student />} />
          <Route exact path='/notification' element={<Notification />} />
          <Route exact path='/editProfile' element={<EditP />} />
          <Route exact path='/listOfCompanies' element={<ListOfCompanies />} />
          <Route exact path='/sendRequest' element={<Intvrequest />} />
          <Route exact path='/meetingRequest' element={<MeetingRequest />} />
          <Route exact path='/trainingList' element={<TrainingList />} />
        </Routes>

      </div >
    </div>


  );
}

export default App;
