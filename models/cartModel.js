import mongoose from "mongoose";
import { Book } from "./booksModel.js";


const cartSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Book', 
        required: true
    },
        items: [{
            books: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Book',
                required: true
            }
        }],
    quantity: {type: Number, required: true, default: 1}
})

export const Cart = mongoose.model('cart', cartSchema);