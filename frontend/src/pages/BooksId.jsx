import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import BookDetail from '../components/BookDetail';

const BooksId = () => {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/books/${bookID}`)
        console.log(res.data)
    
        setBookDetails(res.data)
    
      } catch (error) {
        console.error('Error fetching book details:', error.message);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  let bookID = searchParams.get("id")
  console.log(bookID)


console.log(bookDetails)

  return (
    <div>
      {/* <h1 style={{color:"black"}}>gyjuhb</h1> */}
      <BookDetail data={bookDetails} />
    </div>
  );
}

export default BooksId;