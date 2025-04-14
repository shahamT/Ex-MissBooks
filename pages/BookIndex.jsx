// react

// services

// childrens
import { BooksFilter } from "../cmps/BooksFilter.jsx";
import { BooksList } from "../cmps/BooksList.jsx";

// component
export function BookIndex() {




    return (
        <section className="books-index main-inline-padding">
            <BooksFilter/>
            <BooksList />
        </section>
    )

}