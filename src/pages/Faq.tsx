import React from 'react'
import Question from "../assets/svg/question.svg"
import Navbar from '../components/Navbar'

const Faq = () => {
  return (
    <div className="">
      <div className="h-full bg-gradient-to-r from-[#0D1A3C] to-[#112A6B]">
        <Navbar />
      <section className="relative overflow-hidden h-full" >
                    <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                        {/* <!-- Content --> */}
                        <div className="flex flex-1 flex-col items-center lg:items-start mt-16 md::mt-28 mx-5">
                            <h2 className="text-5xl md:text-4 lg:text-7xl lg:text-left mb-6 mr-5 md:mr-auto text-white font-bold">
                            FAQs</h2>
                        </div>
                        {/* <!-- Image --> */}
                        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                            <img className="" src={Question} alt="Question" />
                        </div>
                    </div>
                </section>
      </div>
    </div>
  )
}

export default Faq
