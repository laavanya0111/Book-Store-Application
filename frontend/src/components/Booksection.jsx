
import React from 'react'
import axios from 'axios'
import { useState } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'

export const Booksection = ({ data, setData}) => {
    
    //const [ setCartData] = useState([]);
    // const [setCartData] = useState([]);
    //const navigate = useNavigate();
    const addCart = async(bookId, quantity) =>{
        try {
            const res = await axios.post("http://localhost:5000/cart/addCart", {bookId,quantity});
            const bookIds = data.map(item => item._id);

            const response = await axios.get("http://localhost:5000/cart/getAllcart");
            console.log("Updated Cart data:", response.data);
            const updatedCartData = res.data.items; // Log the response if needed
            //setData(updatedCartData);
        } catch (error) {
            console.error('Error adding item from cart:', error);
            console.log('Error response data:', error.response?.data);
        }
    }
    return (
        <div className='d-flex justify-content-around align-items-center flex-wrap'>
            {data.map((item, index) => {
                return (
                    <div className="card" style={{ width: "18rem" }}>
                        <div>
                            <img className="card" style={{ width: "18rem" }}
                                src={item.imageURL}
                                alt='/'
                            />
                        </div>
                        <div className="card-body">
                            <h5 ><b>Book Name : </b> {item.title}</h5>
                            <h5 ><b>Author's Name : </b> {item.author}</h5>
                            <h5 ><b>Publish Year : </b> {item.publishYear}</h5>
                            <p ><b>Description : </b> {item.description}</p>
                            <p ><b>Category : </b> {item.category}</p>
                            <h5><b>Price : </b>{item.price}</h5>
                            <div className='d-flex justify-content-around align-items-center'>
                                {/* <button className='btn btn-primary' onClick={() => viewBook(item._id)}>View Book</button> */}
                                <Link 

                                    to={{
                                        pathname: '/BooksId', search: `id=${item._id}` 
                                         // or item.bookId depending on your data structure
                                    }}
                                    className="btn btn-primary BooksId my-3">View Book</Link>
                                <button className='btn btn-primary' onClick={() => addCart(item._id, 1)}>Add to Cart</button>
                                {/* <Link 

                                    to={{
                                        pathname: '/cart',
                                        search: `?bookId=${item._id}` ,
                                    }}
                                    className="btn btn-primary addCart my-3">Add to Cart</Link> */}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

