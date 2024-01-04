import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const AddBooks = () => {
    const [data, setData] = useState({
        title: "", 
        author: "",
        description: "",
        publishYear: "",
        category: "",
        price: "",
        imageURL: ""
    }) 
    const change = (e) => {
        const {name,value} = e.target
        setData({...data, [name]: value})

    }
    console.log(data);
    const submit = async(e) =>{
        e.preventDefault()
        const res = await axios.post("http://localhost:5000/books", data)
        // console.log(res);
        .then(()=>{
            window.location="/books"
          })
    }
    //console.log(data);
    return (
        <div className='bg-dark d-flex  justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
            <div className='container p-4'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label text-white">Book Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the book name" name='title' value={data. title} onChange={change}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label text-white">Author</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the Author of the Book" name='author' value={data.author} onChange={change}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label text-white">Publish Year</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter When the book get published (Only number)" name='publishYear' value={data.publishYear} onChange={change}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label text-white">Description</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Description" name='description' value={data.description} onChange={change} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label text-white">Category</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the Category of the Book" name='category' value={data.category} onChange={change}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label text-white">Price</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the Price of the Book (only number)" name='price' value={data.price} onChange={change}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label text-white">Image</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the URL of the image" name='imageURL' value={data.imageURL} onChange={change}/>
                </div>
                <button className='btn btn-success' onClick={submit}>Submit</button>
            </div>
        </div>
    )
}

export default AddBooks