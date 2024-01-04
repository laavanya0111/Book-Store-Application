import express from "express";
import { Cart } from "../models/cartModel.js";
import { Book } from "../models/booksModel.js";
import mongoose from "mongoose";
const router = express.Router();

// POST endpoint to add a book to the cart
router.post('/addCart', async (req, res) => {
    try {
        const { bookId, quantity } = req.body;

        // Validate input
        if (!bookId || !quantity || isNaN(quantity)) {
            return res.status(400).json({ error: 'Invalid input' });
        }

        // Create a new cart item
        const newCartItem = new Cart({
            bookId,
            quantity: parseInt(quantity),
            created_at: new Date(),
        });

        // Save the cart item to the database
        const savedCartItem = await newCartItem.save();

        // Return the saved cart item in the response
        res.status(201).json(savedCartItem);
    } catch (error) {
        console.error('Error adding book to cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getAllcart', async (req, res) => {
    try {
        // Fetch all items in the cart from the database
        const cartItems = await Cart.find().populate('bookId', 'title author price category imageURL');

        const responseData = cartItems.map(item => ({
            bookId: item.bookId,
            quantity: item.quantity,
        }));
        // Return the list of items in the response
        res.status(200).json({
            count: responseData.length,
            data: responseData,
        });
    } catch (error) {
        console.error('Error getting cart items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Deleting the book from the Cart from the bookId
// router.delete('/delete/:bookId', async (req, res) => {
//     try {
//         const { bookId } = req.params;

//         // Assuming you want to delete the cart item that contains the specified bookId
//         const cart_del = await Cart.findOneAndDelete({ 'items.books': new mongoose.Types.ObjectId(bookId) });

//         if (!cart_del) {
//             return res.status(404).send({ message: "No items in the cart with the specified bookId" });
//         }

//         return res.status(200).send("Cart Item Deleted Successfully");
//     } catch (err) {
//         console.error(err);
//         res.status(500).send({ message: 'Error in deleting' });
//     }
// });
router.delete('/delete/:bookId', async (req, res) => {
    try {
        const { bookId } = req.params;

        // Assuming you want to delete the cart item that contains the specified bookId
        const cart_del = await Cart.findOneAndDelete({ bookId: new mongoose.Types.ObjectId(bookId) });

        if (!cart_del) {
            return res.status(404).send({ message: "No items in the cart with the specified bookId" });
        }

        return res.status(200).send("Cart Item Deleted Successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error in deleting' });
    }
});



// router.put('/update/:bookId', async (req, res) => {
//     try {
//         const { bookId } = req.params;
//         const { quantity } = req.body;
//         if (quantity <= 0) {
//             return res.status(400).send({ message: 'Invalid quantity' });
//         }
//         const cart_update = await Cart.findOne(
//             { bookId },
//         )
//         if (!cart_update) {
//             return res.status(404).send("Book not found in the cart");
//         }
//         const existingItemIndex = cart_update.items.findIndex(item => item.books.toString() === bookId.toString());
//         if (existingItemIndex !== -1) {
//             cart_update.items[existingItemIndex].quantity = quantity;
//         } else {
//             cart_update.items.push({ books: req.params.bookId, quantity });
//         }

//         // Save the updated cart
//         await cart_update.save();
//         return res.status(201).json({ message: "Cart quantity updated successfully", cart_update });
//     }
//     catch (err) {
//         return res.status(500).send({ message: 'Error in updating the cart' })
//     }
// })

export default router;