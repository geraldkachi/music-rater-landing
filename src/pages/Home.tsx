import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <>
            <Hero />
            <div className='max-w-7xl mx-auto my-32 md:my-40'>
                <div className="mx-3">

                    <p className="my-5 text-base text-[#3B71F7]">What is Music Rater?</p>
                    <p className='md:text-4xl text-lg mb-16'>
                        Are you a musician looking for an opportunity to share your music and get honest feedback from a pool of industry experts?  Look no further! Music Rater is the perfect platform for emerging artists looking to get their music discovered and rated.
                    </p>

                    <div className="my-5">
                        <button className="bg-[#3B71F7] shadow-md py-6 md:py-6 px-8 md:px-12 rounded-3xl text-white"> Upload your Music</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
