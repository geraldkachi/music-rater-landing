import React from 'react'
import HeroSvg from '../assets/hero.svg'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-[#0D1A3C] to-[#112A6B]">
            {/* <div className="overflow-hidden bg-no-repeat bg-cover bg-[url('assets/svg/linear.svg')]"> */}
                <Navbar />
                <div className="h-screen my-auto">
                    <section className="relative overflow-hidden h-full" >
                        <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                            {/* <!-- Content --> */}
                            <div className="flex flex-1 flex-col items-center lg:items-start mt-16 md::mt-28 mx-5">
                                <h2 className="text-5xl md:text-4 lg:text-7xl lg:text-left mb-6 mr-5 md:mr-auto text-white font-bold">
                                    Get your sound {'\n'} <span className='text-[#FFC94C]'>discovered</span> and ratedby{'\n'} industry experts</h2>

                                {/* <div className="flex gap-6">
                        </div> */}
                                <button className="bg-[#3B71F7] shadow-md py-4 md:py-6 px-8 md:px-12 rounded-full font-bold text-white"> Upload your Music</button>
                            </div>
                            {/* <!-- Image --> */}
                            <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                                {/* <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full lg:bg-transparent lg:opacity-0" src={HeroSvg} alt="" /> */}
                                <img className="lg:bg-transparent lg:opacity-0" src={HeroSvg} alt="herosvg" />
                            </div>
                        </div>
                        <div
                            // className="overflow-hidden absolute top-0 md:-top-28 md: right-0 hidden lg:block lg:scale-[.79]" >
                            className="overflow-hidden absolute md:-bottom-10 md: right-0 md:-right-24 hidden lg:block lg:scale-[.79]" >

                            <img src={HeroSvg} alt="HeroSvg" />
                        </div>
                        <div className="absolute bg-[rgba(84, 130, 248, 0.12)] backdrop-blur-[200px] w-full hidden py-5 lg:block fixed bottom-0 mx-5">
                            <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
                                <div className='bg-[#c3cbdd38] backdrop-blur-[200px] py-8 px-20 rounded-2xl'></div>
                                <div className='bg-[#c3cbdd38] backdrop-blur-[200px] py-8 px-20 rounded-2xl'></div>
                                <div className='bg-[#c3cbdd38] backdrop-blur-[200px] py-8 px-20 rounded-2xl'></div>
                                <div className='bg-[#c3cbdd38] backdrop-blur-[200px] py-8 px-20 rounded-2xl'></div>
                                <div className='bg-[#c3cbdd38] backdrop-blur-[200px] py-8 px-20 rounded-2xl'></div>
                            </div>
                        </div>
                    </section>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Hero
