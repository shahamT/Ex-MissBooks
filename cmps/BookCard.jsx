

export function BookCard({ book, setSelectedBook }) {

    const { title, thumbnail, authors ,id} = book
    return (
        <article onClick={() => setSelectedBook(id)} className="book-card flex flex-column align-center">
            <h3 className="book-title">{title}</h3>
            <p>by</p>
            <p className="book-authors">{authors}</p>
            <img
                className="book-thumbnail"
                src={`${thumbnail}`}
                alt=""
            />
            <div className="book-action-btns">
                <button className="delete-book-btn">Delete</button>
            </div>
        </article>
    )
}