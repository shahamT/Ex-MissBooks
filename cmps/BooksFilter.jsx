// react
const { useState, useEffect } = React

// component
export function BooksFilter({ filterBy, onSetFilterBy }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

    useEffect(() => {
        onSetFilterBy(filterByToEdit)
    }, [filterByToEdit])


    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;

            case 'checkbox':
                value = target.checked
                break
        }
        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    const { search } = filterByToEdit
    return (
        <section className="books-filter flex">
            <form className="filters-form flex align-center">
                <input name="search"
                    value={search}
                    onChange={handleChange}
                    type="text"
                    placeholder="search" />
                <select name="category">
                    <option value="test">test</option>
                    <option value="test">test</option>
                    <option value="test">test</option>
                </select>
            </form>
        </section>
    )
}