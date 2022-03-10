import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// import * as React from "react";
// import './index.css';
import './placed.css';
import { useFormik } from 'formik';
import { useEffect, useState } from "react";
import imageCompression from 'browser-image-compression'
import axios from "axios";
import Nav_side from '../Nav_side';
// import Nav_side from '../Nav_side';
function Placed_Student() {
  const [post, setPosts] = useState([]);

  useEffect(async () => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    axios.get('https://api.github.com/users')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //------------------------ PHOTO UPLOAD ------------------

  const initialValues = {
    photo: "",
    photo2: "",
    photo3: "",

  }
  const formik = useFormik({
    initialValues
  })


  const imageToBase64 = async (file, feildName) => {
    if (file) {
      const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1920,
      }
      try {
        const compressedFile = await imageCompression(file, options);
        console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`);
        var reader = new FileReader();
        reader.readAsDataURL(compressedFile)
        reader.onload = async () => {
          var Base64 = reader.result
          formik.setFieldValue(feildName, Base64)
        }
        reader.onerror = (err) => {
          console.log(err);
        }
      } catch (error) {
        console.log(error);
      }

    }
  }
  return (
    <div>
    <Nav_side/>
    <div className='App' id='appp'> 
{/* <Nav_side></Nav_side> */}
      <div className='std' id='std'>
        <h1 className='std' id='std'>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"></path></svg>&nbsp;Placed Students </h1><hr className="Hr" style={{
              border: '2px solid ' }} />
      </div>
      <div class="row" id='roww'>
          {post.map((product) =>(
        <div class="col-sm-4" id='col-sm-44'>
            <div class="card" id='cards'>
              <div class="card-body" id='cards-body'>
                <div className="container" id='containers'>
                  <div className="mini-container" id='mini-containers'>
                    <div className='profile-pic-div' id='profile-pic-divv'>
                      {formik.values.photo !== '' ? <img style={{ cursor: 'pointer', height: '156px', width: '125px', borderRadius: '50%', cursor: 'pointer', marginTop: "-16px" }} className='ml-2' onClick={() => { document.getElementById("profilePhoto").click() }} src={formik.values.photo} alt="pppp" />
                        : <img style={{ cursor: 'pointer', height: '142px', width: '126px', marginTop: "-16px" }} className='ml-2' onClick={() => { document.getElementById("profilePhoto").click() }} src="image.jpg" alt="pppp" /> }
                    </div>
                    <div className='input-data' id='input-dataa'>
                      <label> Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                      <input id='inputtype' type="text" value={product.login} class="img" /><br />
                      <label>Company:</label>
                      <input id='inputtype' type="text" value={product.type} class="img" /><br />
                      <label>Package:&nbsp;&nbsp;</label>
                      <input id='inputtype' type="text" value={product.node_id} class="img" /><br />
                      <input type="file" name="photo" id="profilePhoto" style={{ display: "none" }} accept="image/*" onChange={(e) => {
                        imageToBase64(e.target.files[0], "photo");
                      }} />
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </div>
          ))}
      </div>
    </div>
    </div>
  );
}

export default Placed_Student;
