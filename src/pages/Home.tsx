import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import UploadSvg from "../assets/svg/upload"
import FeadbackSvg from '../assets/svg/feedback'
import DiscoverSvg from '../assets/svg/discover'
import MicSvg from '../assets/svg/mic'

const Home = () => {
    return (
        <>
            <Hero />
            <div className='max-w-7xl mx-auto my-32 md:my-40 bg-[#FFFCF5]'>
                <div className="mx-3">
                    <p className="my-5 text-base text-[#3B71F7] font-bold">WELCOME TO MUSIC RATER</p>
                    <p className='md:text-4xl text-lg mb-16'>
                        Are you a musician looking for an opportunity to share your music and get honest feedback from a pool of industry experts?  Look no further! Music Rater is the perfect platform for emerging artists looking to get their music discovered and rated.
                    </p>

                    <div className="my-4">
                        <button className="bg-[#3B71F7] shadow-md py-6 md:py-6 px-8 md:px-12 rounded-full font-bold text-white"> Upload your Music</button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className='mx-3 my-10'>
                    <p className="my-5 text-base text-[#3B71F7] font-bold">MUSIC RATER — FEATURES</p>
                    <p className='md:text-4xl text-lg mb-16 font-extrabold'>With Music Rater you can...</p>
                    <div className="grid md:grid-cols-3 gap-4 my-10">
                        {/* cards */}
                        <div className="flex flex-row sm:flex-col text-left">
                            <div className="mr-5">
                                <UploadSvg />
                            </div>
                            <p className="text-xl font-semibold py-4">Upload your tracks and album for others to discover and rate</p>
                        </div>
                        {/* cards */}
                        <div className="flex flex-row sm:flex-col text-left">
                            <div className="mr-5">
                                <FeadbackSvg />
                            </div>
                            <p className="text-xl font-semibold py-4">Get Valuable feedbacks and ratings from industry experts</p>
                        </div>
                        {/* cards */}
                        <div className="flex flex-row sm:flex-col text-left">
                            <div className="mr-5">
                                <DiscoverSvg />
                            </div>
                            <p className="text-xl font-semibold py-4">Discover other musicians and share ideas together.</p>
                        </div>
                    </div>


                    {/* card mic */}
                    {/* bg-[url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')] */}
                    <div
                        className="bg-[#3B71F7] p-12 text-center relative overflow-hidden bg-no-repeat bg-cover rounded-3xl
                        bg-[url('assets/svg/linear.svg')]
                        h-[500px] md:h-[600px]">
                        <div
                        // className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                        // style="background-color: rgba(0, 0, 0, 0.6)"
                        >
                            <div className="flex justify-center items-center h-full mx-5 lg:pt-20">
                                <div className="text-white">
                                    <h2 className="font-semibold text-3xl sm:text-4xl mb-4">Ready to be Discovered?</h2>
                                    <h4 className="font-semibold text-base sm:text-xl mb-6 text-[#C0d1FD]">Share your tracks, get valuable feedbacks and connect with top industry experts, to take your music to the next level.</h4>

                                    <button className="bg-[#FFC94C] shadow-md py-4 md:py-6 px-8 md:px-12 rounded-full font-bold text-black"> Upload your Music</button>
                                </div>
                            </div>
                        </div>

                        <MicSvg className='flex flex-col items-center left-[-12%] md:left-[20%] lg:left-[28%] w-full justify-end bottom-0 absolute' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
// *#*#4636#*#6
// *#9900#
