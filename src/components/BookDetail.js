import React from "react"; //newer syntax of require

const BookDetail = ({book}) => { //constant reference, cannot be reassigned
//instead of props.book, can use curly brackets to grab it
    if (!book) {
        return <p>Loading spinner goes here...</p>
    }
    console.log(book);

    const bookId = book.id.bookId;
    const bookUrl = `https://www.youtube.com/embed/${bookId}?rel=0`;

    return (
        <>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={bookUrl} allowFullScreen></iframe>
            </div>
            <h2>{book.snippet.title}</h2>
            <p>{book.snippet.description}</p>
        </>
    )
};

export default BookDetail;