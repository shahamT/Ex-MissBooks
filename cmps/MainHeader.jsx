// react

export function MainHeader({onSetPage}) {

    return (
        <header className="main-header main-inline-padding flex space-between align-center">
            <img src="img\logo\miss-books-logo.png" alt="" className="main-logo" />
            <nav className="main-nav">
                <ul className="flex space-between clean-list">
                    <li><a onClick={()=> onSetPage('HomePage')} href="#">Home</a></li>
                    <li><a onClick={()=> onSetPage('BookIndex')} href="#">Books</a></li>
                    <li><a onClick={()=> onSetPage('AboutUs')} href="#">About</a></li>
                </ul>
            </nav>
        </header>
    )
}