
// react
const { useState, useEffect } = React

// services
import { bookService } from "../services/book.service.js"


// component
export function BookDetails({ selectedBook, setSelectedBook }) {
    const [book, setBook] = useState(null)

    useEffect(() => {
        LoadBook()
    }, [])

    function LoadBook() {
        bookService.get(selectedBook)
            .then(book => setBook(book))
            .catch(err => console.log("err: ", err))
    }

    if (!book) return <div>loading...</div>

    const { title, subtitle, authors, publishedDate, description, thumbnail, pageCount, categories, language, listPrice } = book
    return (
        <section className="book-details grid">
            <button className="back-btn text-btn back-icon"
                onClick={() => setSelectedBook(null)} >
                Back
            </button>

            <h1 className="book-title">{title}</h1>
            <p className="book-subtitle">{subtitle}</p>
            <p>{authors}</p>
            <p>{publishedDate}</p>
            <p>{description}</p>
            <img src={`${thumbnail}`} alt="" className="book-thumbnail" />
            <p>{pageCount}</p>
            <p>{categories}</p>
            <p>{language}</p>
            {/* <p>{listPrice}</p> */}
        </section>
    )
}






// "id": "JYOJa2NpSCq",
//       "title": "morbi",
//       "subtitle": "lorem euismod dictumst inceptos mi",
//       "authors": [
//         "Barbara Cartland",
//         "Barbara Cartland"
//       ],
//       "publishedDate": 1978,
//       "description": "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",
//       "pageCount": 129,
//       "categories": [
//         "Computers",
//         "Hack"
//       ],
//       "thumbnail": "img/BooksImages/19.jpg",
//       "language": "sp",
//       "listPrice": {
//         "amount": 44,
//         "currencyCode": "EUR",
//         "isOnSale": true
//       }