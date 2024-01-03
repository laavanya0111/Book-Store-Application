import express from 'express';
import { Book } from '../models/booksModel.js';

const router = express.Router();

//To post the book into the database
router.post('/', async (req,res)=>{
    try{
        const {imageURL,title, author, publishYear, description, price} = req.body
        if(!title || !author || !publishYear || !description || !price){
            return res.status(400).send({
                message: "Send all required field"
            })
        }
        const newBook = {
            imageURL: imageURL,
            title: title,
            author: author,
            publishYear: publishYear,
            description: description,
            price: price
        }
        const book = await Book.create(newBook);
        return res.status(201).send(book);
    }
    catch(err){
        return res.status(500).send({message: err.message})
    }
})

//To get all the books which are there in the database
router.get('/getbooks', async(req,res) => {
    try{
        const book = await Book.find();
        // console.log(book);
        return res.status(201).json({
            count: book.length,
            data: book
        });
        
    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
})

//To get the books through ID
router.get('/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const book = await Book.findById(id);
        return res.send(201).json(book)
    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
})

//To get the books through category
router.get('/category', async(req,res) =>{
    try{
        const {category} = req.query;
        const book = await Book.findAll();
        if(!book){
            return res.status(400).send({message: "No books found"})
        }
        return res.status(201).json(book);
    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
})

//To update the book through ID
router.put('/update/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);

        if(!result){
            return res.status(401).json({message: 'book not found'})
        }
        return res.status(201).json({message: "Book updated Successfully"});
    }
    catch(err){
        return res.status(500).send({message: err.message})
    }
})

// Deleting book through ID
router.delete('/delete/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const del = await Book.findByIdAndDelete(id);
        if(!del){
            return res.status(401).json({message: "Book not found"});
        }
        return res.status(201).json({message: "Book deleted Successfully"});
    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
})

export default router;