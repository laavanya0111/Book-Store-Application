import React from 'react'


const BookDetail = ({ data }) => {
  return (
    <div>
      <h2>Book Details</h2>
      {data ? (
        <div className='d-flex justify-content-around align-items-center flex-wrap'>
          <div className="card" style={{ width: "18rem" }}>
            <div>
              <img className="card-img-top" style={{ width: "18rem" }}
                src={data.imageURL}
                alt={data.title}
              />
            </div>
            <div className="card-body">
              <h3 className="card-title">Title: {data.title}</h3>
              <p className="card-text">Author: {data.author}</p>
              <p className="card-text">Description: {data.description}</p>
              {/* Add more details as needed */}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};
export default BookDetail;