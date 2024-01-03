import express from "express";
import { Cart } from "../models/cartModel.js";
import { Book } from "../models/booksModel.js";
import mongoose from "mongoose";
const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        const { bookId, quantity } = req.body;

        // Validate input
        if (!mongoose.Types.ObjectId.isValid(bookId)) {
            return res.status(400).send({ message: 'Invalid book ID' });
        }
        if (quantity <= 0) {
            return res.status(400).send({ message: 'Quantity must be greater than 0' });
        }

        // Find or create the cart
        let cart = await Cart.findOne({ bookId });
        if (!cart) {
            cart = new Cart({ bookId });
        }

        // Check if book already exists in cart
        const existingItemIndex = cart.items.findIndex(item => item.books.toString() === bookId.toString());
        console.log(item.books.toString());
        if (existingItemIndex !== -1) {
            cart.items[existingItemIndex].quantity += quantity;
        } else {
            cart.items.push({ books: bookId, quantity });
        }

        // Save the cart
        await cart.save();

        res.status(201).json({ message: 'Book added to cart successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error adding book to cart' });
    }
});

router.get('/getcart', async (req, res) => {
    try {
        const { bookId } = req.body; // Assuming you expect a bookId instead of cartId

        // Find the cart associated with the bookId
        const cart = await Cart.findOne({ bookId }).populate('books'); // Populates book details
        console.log(cart);
        if (!cart) {
            return res.status(404).send({ message: 'No cart found for this book' });
        }

        // Construct the response object with full book details
        const populatedCart = {
            bookId: cart.bookId,
            books: cart.items.map(item => ({
                ...item.books.toObject(), // Include all book properties from populated document
                quantity: item.quantity, // Add quantity from the cart item
            })),
        };
        console.log(populatedCart);

        res.status(200).json(populatedCart);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error getting cart details' });
    }
});

router.delete('/delete/:bookId', async (req, res) => {
    try {
        const { bookId } = req.params;
        const cart_del = await Cart.findOneAndDelete({ bookId });
        if (!cart_del) {
            return res.status(201).send({ message: "No items in the cart" })
        }
        return res.status(201).send("Cart Deleted Successfully");
    }
    catch (err) {
        res.status(500).send({ message: 'Error in deleting' })
    }
})

router.put('/update/:bookId', async (req, res) => {
    try {
        const { bookId } = req.params;
        const { quantity } = req.body;
        if (quantity <= 0) {
            return res.status(400).send({ message: 'Invalid quantity' });
        }
        const cart_update = await Cart.findOne(
            { bookId },
        )
        if (!cart_update) {
            return res.status(404).send("Book not found in the cart");
        }
        const existingItemIndex = cart_update.items.findIndex(item => item.books.toString() === bookId.toString());
        if (existingItemIndex !== -1) {
            cart_update.items[existingItemIndex].quantity = quantity;
        } else {
            cart_update.items.push({ books: req.params.bookId, quantity });
        }

        // Save the updated cart
        await cart_update.save();
        return res.status(201).json({ message: "Cart quantity updated successfully", cart_update });
    }
    catch (err) {
        return res.status(500).send({ message: 'Error in updating the cart' })
    }
})

export default router;