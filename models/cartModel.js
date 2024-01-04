import mongoose from "mongoose";
import { Book } from "../models/booksModel.js";


const cartSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book', // Make sure this matches the model name of your 'books' collection
        required: true,
    },
    items: [{
        books: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book',
            //required: true,
        },
        quantity: { type: Number, required: true, default: 1 }
    }],
})

export const Cart = mongoose.model('cart', cartSchema);