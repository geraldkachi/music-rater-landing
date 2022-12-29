import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="p-5">
            <nav className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
                <div className='flex items-center'>
                    <Link to="/"><h1 className=' text-[#3B71F7] text-2xl font-bold'>M.Rater</h1></Link>
                    <p className='text-sm font-bold ml-5'>Copyright @ 2022</p>
                </div>

                <ul className="flex items-center gap-4 text-sm my-4 text-[#666666]">
                    <li className="cursor-pointer text-xs sm:text-sm">
                        <Link to="/">For Listeners</Link>
                    </li>
                    <li className="cursor-pointer text-xs sm:text-sm">
                        <Link to="/faq">FAQs</Link>
                    </li>
                    <li className="cursor-pointer text-xs sm:text-sm">
                        <Link to="/price">Terms &amp; Conditions</Link>
                    </li>
                    <li className="cursor-pointer text-xs sm:text-sm">
                        <Link to="/privacy">Privacy Policy</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer
