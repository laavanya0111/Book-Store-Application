import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';

const Home = () => {
    const image = require('../images/study.jpg');
  return (
    <div>
        <div className="Home-page bg-dark text-white container-fluid d-flex justify-content-center align-items-start">
            <div className="row align-items-center container ">
                <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
                style = {{height: "91.5vh"}}
                >
                    <h2 style={{fontSize: "80px"}}>Book Store</h2>
                    <h3 style={{fontSize: "50px"}}>For You</h3>
                    <p className='mb-0' style={{color: 'silver'}}>Checkout the Books From Here</p>
                    <Link to='/books' className="viewBook my-3">View Books</Link>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
                style = {{height: "91.5vh"}}
                >
                    <img className='img-fluid homeimg'
                    src={image} alt='/'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home