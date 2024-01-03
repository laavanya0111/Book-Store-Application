import React from 'react'

const AddBooks = () => {
    return (
        <div className='bg-dark d-flex  justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
            <div className='container p-4'>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-white">Book Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the book name" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-white">Author</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the Author of the Book" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-white">Description</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Description" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-white">Publish Year</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter When the book get published" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-white">Price</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the Price of the Book" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-white">Image</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the URL of the image" />
                </div>
                <button className='btn btn-success'>Submit</button>
            </div>
        </div>
    )
}

export default AddBooks