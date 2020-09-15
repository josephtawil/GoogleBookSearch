import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Button} from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";

const SavedPage = () => {
    const [savedBooks, setSavedBooks] = useState([]);

    const getBooks = () => {
        Axios.get("/api/books").then((res)=> setSavedBooks(res.data));
    };

    useEffect(()=>{
        getBooks();
    }, []);


    return (
        <div>
            <Jumbotron/>
            {savedBooks.map((book)=> {
                console.log(book);

                return (
                    <Card key = {book.id} image = {book.image} title = {book.title} author = {book.authors} description = {book.description} link= {book.link} btnType = "btn btn-success" btnText="Save">
                        <Button className="btn btn-danger" text="Remove" onClick={()=>{
                            Axios.delete(`/api/books/${book._id}`);
                            getBooks();
                        }}
                        />
                    </Card>
                )
            })}
        </div>
    );
};

export default SavedPage;