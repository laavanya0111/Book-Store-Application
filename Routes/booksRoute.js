import express from 'express';
import { Book } from '../models/booksModel.js';

const router = express.Router();

//To post the book into the database
router.post('/', async (req,res)=>{
    try{
        const {imageURL,title, author, publishYear, description, category, price} = req.body
        if(!title || !author || !publishYear || !description || !category ||!price){
            return res.status(400).send({
                message: "Send all required field"
            })
        }

        let existingBook = await Book.findOne({ where: { title: title } });

        if (existingBook) {
            // If the book exists, update the quantity
            existingBook.quantity = existingBook.quantity ? existingBook.quantity + 1 : 1;
            await existingBook.save();
            return res.status(200).send(existingBook);
        }
        else {
            // If the book doesn't exist, create a new entry
            const newBook = {
                imageURL: imageURL,
                title: title,
                author: author,
                publishYear: publishYear,
                description: description,
                category: category,
                price: price,
                quantity: 1, // Assuming default quantity is 1 for a new book
                created_at: new Date()
            };

            const book = await Book.create(newBook);
            return res.status(201).send(book);
        }
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
        return res.status(200).json({
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
        // const {title, author, description, publishYear, category, price, imageURL} = req.body;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        return res.status(200).json({
            title: book.title,
            author: book.author,
            description: book.description,
            publishYear: book.publishYear,
            category: book.category,
            price: book.price,
            imageURL: book.imageURL
        })
    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
})

//To get the books through category
// router.get('/category', async(req,res) =>{
//     try{
//         const {category} = req.query;
//         const book = await Book.findAll();
//         if(!book){
//             return res.status(400).send({message: "No books found"})
//         }
//         return res.status(201).json(book);
//     }
//     catch(err){
//         return res.status(500).send({message: err.message});
//     }
// })

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