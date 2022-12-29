import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Privacy = () => {
  return (
    <div className="">
      <div className="h-full bg-gradient-to-r from-[#0D1A3C] to-[#112A6B]">
        <Navbar />
        <section className="relative overflow-hidden h-full py-5" >
          <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* <!-- Content --> */}
            <div className="flex flex-1 flex-col items-center lg:items-start mt-16 md::mt-28 mx-5">
              <h2 className="text-5xl md:text-4 lg:text-7xl lg:text-left mb-6 mr-5 md:mr-auto text-white font-bold">Privacy Policy</h2>
              <div className='text-[#B6B8BC]'>Clear up any confusion with our FAQs</div>
            </div>
            {/* <!-- Image --> */}
            <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
              {/* <img className="" src={''} alt="Question" /> */}
            </div>
          </div>
        </section>
      </div>

      <div className='fixed bottom-0 ' >
      <Footer />
      </div>
    </div>
  )
}

export default Privacy
