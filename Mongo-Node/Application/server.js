const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors package
const app = express();

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors()); // Use cors middleware

// MongoDB connection
mongoose.connect('mongodb+srv://rahulpandharkar:M5fR8OW2EtMrny8y@cluster0.jyeuouw.mongodb.net/bookstore', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Book schema
const bookSchema = new mongoose.Schema({
    title: String,
    author: String
});

const Book = mongoose.model('Book', bookSchema);

// Routes
app.get('/api/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

app.post('/api/books', async (req, res) => {
    const { title, author } = req.body;

    try {
        const newBook = new Book({ title, author });
        await newBook.save();
        res.json(newBook);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
