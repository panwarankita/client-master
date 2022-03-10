/* eslint-disable react/jsx-pascal-case */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './card.css';
import Nav_side from '../Nav_side';


export default function TrainingList() {
    const [post, setPosts] = useState([]);


    // useEffect(async () => {
    //     fetchProducts();
    // }, []);
    // const fetchProducts = () => {
    //     axios
    //   .get('https://shoppingapiacme.herokuapp.com/shopping')
    //         .get('https://iteg.herokuapp.com/api/Student_Reg/List')
    //         .then((res) => {
    //             console.log(res);
    //             setPosts(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    useEffect(() => {

        fetch("https://iteg.herokuapp.com/api/Student_Reg/List").then((result) => {
            result.json().then((response) => {
                console.log("result", response)
                setPosts(response.data);
            });
        });
    }, []);
    console.log(post);
    return (
        <div>
            <Nav_side />

            <div>

                <h1><svg stroke="currentColor" fill="currentColor" color='black' stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg> Trannings</h1>
            </div>
            <div className='container' id='container'>
                <div className='row' id='row'>
                    {post.map((product) => (
                        < div className='col-md-2' id='col-md-2'>
                            <div className='card' id='card'>
                                <div className='card-body' id='card-body'>

                                    <div className='card' key={product.id}>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" className="png1" alt="..." />
                                        <h5>TCS</h5>
                                        <div className='input-data' id='input-data'>
                                            <label>Trainner Name</label>
                                            <input type="text" value={product.FirstName} className="img" id='input' /><br />
                                            <label>Time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                                            <input type="text" value={product.FirstName} className="img" id='input' /><br />
                                            <label>Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                            <input type="text" value={product.FirstName} className="img" id='input' /><br />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}
