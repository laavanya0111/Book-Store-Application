import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CartSection = ({ data }) => {
    const [cartData, setCartData] = useState(data);
    const [showPopup, setShowPopup] = useState(false);
    
    console.log("cartSection",data);
    useEffect(() => {
        // Display the pop-up for 3 seconds when showPopup is true
        if (showPopup) {
            const timeout = setTimeout(() => {
                setShowPopup(false);
            }, );

            // Clear the timeout when the component unmounts or showPopup becomes false
            return () => clearTimeout(timeout);
        }
    }, [showPopup]);
    const removeCart = async (bookId) => {
        
        if (!bookId) {
            console.error('Invalid bookId:', bookId);
            return;
        }
        try {
            const res = await axios.delete(`http://localhost:5000/cart/delete/${bookId}`);
            console.log(res.data); // Log the response if needed
            setCartData((prevData) => prevData.filter((item) => bookId !== item.bookId._id));
            setShowPopup(true);
            // You might want to refresh the cart data after removing an item
            // Call a function to fetch the updated cart data here if needed
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    }
    return (
        <div className='d-flex justify-content-around align-items-center flex-wrap'>
            {data.map((item, index) => {
                return (
                    <div className="card" style={{ width: '18rem' }} key={index}>
                        <div>
                            <img className="card" style={{ width: "18rem" }}
                                src={item.bookId.imageURL}
                                alt='/'
                            />
                        </div>
                        <div className="card-body">
                            <h5 ><b>Book Name : </b> {item.bookId.title}</h5>
                            <h5 ><b>Author's Name : </b> {item.bookId.author}</h5>
                            <h5 ><b>Publish Year : </b> {item.bookId.publishYear}</h5>
                            <p ><b>Description : </b> {item.bookId.description}</p>
                            <p ><b>Category : </b> {item.bookId.category}</p>
                            <h5><b>Price : </b>{item.bookId.price}</h5>
                            <button className='btn btn-primary' onClick={() => removeCart(item.bookId._id)}>Remove Cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CartSection