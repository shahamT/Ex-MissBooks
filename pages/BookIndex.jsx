// react
const { useState, useEffect } = React

// services
import { bookService } from "../services/book.service.js";

// childrens
import { BooksFilter } from "../cmps/BooksFilter.jsx";
import { BooksList } from "../cmps/BooksList.jsx";
import { BookDetails } from "../cmps/BookDetails.jsx";
import { ContentTitle } from "../cmps/ContentTitle.jsx";

// component
export function BookIndex({ setPage }) {

    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then(books => setBooks(books))
            .catch(err => console.log("err: ", err))
    }

    function onSetFilterBy(filterByToEdit) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterByToEdit }))
    }

    return (
        <section className="books-index main-inline-padding flex flex-column">
            <ContentTitle title="Books" />

            {!selectedBook
                ?
                <React.Fragment>
                    <BooksFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
                    <BooksList books={books} setSelectedBook={setSelectedBook} />
                </React.Fragment>
                :
                <BookDetails selectedBook={selectedBook} setSelectedBook={setSelectedBook} />
            }
        </section>
    )

}