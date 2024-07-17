const express = require('express');
const router = express.Router();
const Book = require('../models/books'); // Corrected import

router.get('/', async (req, res) => {
    let books;
    try {
        books = await Book.find().sort({ createdAt: 'desc' }).limit(10).exec();
    } catch {
        books = [];
    }
    res.render('index', { books: books });
});

module.exports = router;
