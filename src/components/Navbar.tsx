import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="p-5">
            <nav className="max-w-7xl mx-auto flex">
                <h1 className='text-white text-2xl'>M.Rater</h1>
                <ul className="hidden sm:flex flex-1 justify-start items-center gap-12 uppercase text-xs ml-16 text-white">
                    <li className="cursor-pointer text-sm">
                        <Link to="/">FOR LISTENERS</Link>
                    </li>
                    <li className="cursor-pointer text-sm"><Link to="faq">FAQS</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
