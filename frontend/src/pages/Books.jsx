import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Booksection } from '../components/Booksection';


const Books = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get("http://localhost:5000/books/getbooks");
            //   console.log(response.data.data);
              setData(response.data.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };

          fetchData()
      
        },[])
        console.log(data)
       
    
    return (
        <div className='bg-dark' style={{ minHeight: '91.5vh' }}>
            <div className='d-flex justify-content-center align-items-center py-3'>
                <h4 className='text-white'>Books Section</h4>
            </div>
             <Booksection data= {data}/>
        </div>
    )
}

export default Books