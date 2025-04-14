// react
const { useState } = React

// services

// childrens
import { MainHeader } from "./cmps/MainHeader.jsx"
import { AboutUs } from "./pages/AboutUs.jsx"
import { BookIndex } from "./pages/BookIndex.jsx"
import { HomePage } from "./pages/HomePage.jsx"

// component
export function RootCmp() {

    const [page, setPage] = useState('BookIndex')




    
    return (
        <section className="app grid main-layout">
            <MainHeader onSetPage={(page) => setPage(page)} />

            <main className="main-content main-layout-columns">
                {page === 'BookIndex' && <BookIndex />}
                {page === 'HomePage' && <HomePage />}
                {page === 'AboutUs' && <AboutUs />}
            </main>
        </section>
    )
} 