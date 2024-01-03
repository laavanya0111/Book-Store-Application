import React from 'react'

export const Booksection = ({ data }) => {
    // console.log(data[0].title);
    // console.log(data[0]);
    return (
        <div className='d-flex justify-content-center align-items-center'>
            {data.map((item, index) => {
                return (
                    <div style={{
                        width: "200px",
                        height: "350px",
                        backgroundColor: "white",
                        }}
                    >
                        <div>
                            <img 
                                style={{width: '100px', height: '120px'}}
                                className='img-fluid'
                                src={item.imageURL}
                                alt='/'
                            />
                        </div>
                        <div>
                            <h6 style={{ fontSize: "15px" }} className=' px-2 ' >
                                {item.title}
                            </h6>
                            <p className=''>
                                {item.author}
                                {item.description}
                                {item.publishYear}
                                Rs {item.price}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
