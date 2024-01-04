import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams } from "react-router-dom";
import { CartSection } from '../components/CartSection'
import { Link } from 'react-router-dom';

const Cart = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cart/getAllcart');
        console.log('cart data', response.data.data);
        setData(response.data.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
        
    }, [])

    return (
        <div className='bg-dark' style={{ minHeight: '100vh' }}>
            <div className='d-flex justify-content-center align-items-center py-3'>
                <h4 className='text-white'>Cart Section</h4>
            </div>
            <CartSection data={data} />
            
        </div>
    )
}

export default Cart