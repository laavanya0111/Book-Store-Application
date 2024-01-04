import mongoose from "mongoose";

const bookschema = new mongoose.Schema({
    imageURL:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publishYear:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity: {
        type:Number,
        require: 1
    }
});

export const Book = mongoose.model('Book', bookschema);