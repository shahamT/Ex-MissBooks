
// childrens
import { BookCard } from "./BookCard.jsx"

// component
export function BooksList({ books, setSelectedBook }) {





    if (!books) return (
        <p>loading...</p>
    )

    return (
        <section className="books-list grid">
            {books.map(book=> {
                return  <BookCard key={book.id} book={book} setSelectedBook={setSelectedBook}/>
            })}
            
           

        </section>
    )
}