import React from 'react'
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    const location = useLocation()
    const link = location.pathname

    return (
        <header className="p-5">
            <nav className="max-w-7xl mx-auto flex">
                <Link to="/"><h1 className=' text-[#FFC94C] sm:text-white text-2xl font-bold'>M.Rater</h1></Link>
                <ul className="hidden sm:flex flex-1 justify-start items-center gap-12 uppercase text-xs ml-32 text-white">
                    <li className="cursor-pointer text-sm">
                        <Link to="/" className={`${link === '/' && 'text-[#FFC94C]' }`}>OR LISTENERS</Link>
                    </li>
                    <li className="cursor-pointer text-sm">
                        <Link to="/faq" className={`${link === '/faq' && 'text-[#FFC94C]' }`}>FAQS</Link>
                    </li>
                    <li className="cursor-pointer text-sm">
                        <Link to="/price" className={`${link === '/price' && 'text-[#FFC94C]' }`}>PRICING</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
