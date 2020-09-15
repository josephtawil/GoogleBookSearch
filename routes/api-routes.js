const express = require('express');
const router = express.Router();
const Book = require('../model/bookModel');
const path = require('path');

router.get("/api/books", async (req,res)=> {
    const books = await Book.find();
    console.log(books);
    res.json(books);
});

router.post("/api/books", async (req, res)=> {
    try{
        const {id, title, authors, description, image, link} = req.body;
        const newBook = new Book({
            id: id,
            title: title,
            authors: [...authors],
            description: description,
            image: image,
            link: link,
        });

        const savedBook = await newBook.save();
        res.json(savedBook);
    }
    catch (err){
        res.json(err);
    }
});

router.delete("/api/books/:id", async (req, res)=>{
    try {
        const deleteId = await Book.findByIdAndDelete(req.params.id);
        res.json(deleteId);
    }
    catch (err){
        res.json(err);
    }
});

module.exports = router;