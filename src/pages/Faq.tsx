import React from 'react'
import Question from "../assets/svg/question.svg"
import Accordion from '../components/Accordion'
import Navbar from '../components/Navbar'

import Footer from "../components/Footer"


const faqArr = [
  {
    header: 'What is Music Rater?',
    content: 'The Music Rater app is a tool specifically designed for musicians to rate their own music and get  feedback from other musicians. It allows musicians to create a profile, upload their music, and receive  ratings and comments from other users on the platform.'
  },
  {
    header: 'How do I register on the Platform?',
    content: 'The Music Rater app is a tool specifically designed for musicians to rate their own music and get  feedback from other musicians. It allows musicians to create a profile, upload their music, and receive  ratings and comments from other users on the platform.'
  },
  {
    header: 'How does the rating system work?',
    content: 'The Music Rater app is a tool specifically designed for musicians to rate their own music and get  feedback from other musicians. It allows musicians to create a profile, upload their music, and receive  ratings and comments from other users on the platform.'
  },
  {
    header: 'Can i  upload any type of song  on Music Rater?',
    content: 'The Music Rater app is a tool specifically designed for musicians to rate their own music and get  feedback from other musicians. It allows musicians to create a profile, upload their music, and receive  ratings and comments from other users on the platform.'
  },
  {
    header: 'Do I get feedbacks from other artists on the platform?',
    content: 'The Music Rater app is a tool specifically designed for musicians to rate their own music and get  feedback from other musicians. It allows musicians to create a profile, upload their music, and receive  ratings and comments from other users on the platform.'
  },
  {
    header: 'Is the Music Rater app free to use?',
    content: 'The Music Rater app is a tool specifically designed for musicians to rate their own music and get  feedback from other musicians. It allows musicians to create a profile, upload their music, and receive  ratings and comments from other users on the platform.'
  },
  {
    header: 'Is the Music Rater available on all devices?',
    content: 'The Music Rater app is a tool specifically designed for musicians to rate their own music and get  feedback from other musicians. It allows musicians to create a profile, upload their music, and receive  ratings and comments from other users on the platform.'
  },
  {
    header: 'Is the Music Rater available on all devices?',
      content: 'The Music Rater app is a tool specifically designed for musicians to rate their own music and get  feedback from other musicians. It allows musicians to create a profile, upload their music, and receive  ratings and comments from other users on the platform.'
  },
]

const Faq = () => {
  return (
    <div className="">
      <div className="h-full bg-gradient-to-r from-[#0D1A3C] to-[#112A6B] ">
      <Navbar />
        <section className="relative overflow-hidden h-full py-5" >
          <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* <!-- Content -- */}
            <div className="flex flex-1 flex-col items-center lg:items-start mt-16 md::mt-28 mx-5">
            <h2 className="text-5xl md:text-4 lg:text-7xl lg:text-left mb-6 mr-5 md:mr-auto text-white font-bold">FAQs</h2>
              <div className='text-[#B6B8BC]'>Clear up any confusion with our FAQs</div>
            </div>
            {/* <!-- Image --> */}
            {/* <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10"> */}
            <div className=" justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10 hidden lg:block">
              <img className="" src={Question} alt="Question" />
            </div>
          </div>
        </section>
      </div>

        <div className="my-20">
            {
              // Array(7)
              // .fill("")
              // .map((_, index) => (
              faqArr.map((item, index) => (
            <Accordion key={`faq_${index}`} heading={
                    <h1 className="font-semibold my-4 text-lg">{item.header}</h1>}>
                  <p className="pb-4">{ item?.content }</p>
            </Accordion>
            ))}
        </div>

        <div className="mt-2 mx-auto max-w-4xl my-10">

<div className="mx-5">

<p className="text-[#02123B] font-extrabold text-lg md:text-3xl mb-4">Got any other questions?</p>
<button className="bg-[#3B71F7] shadow-md py-4 md:py-6 px-8 md:px-12 rounded-full font-bold text-white"> Upload your Music</button>
</div>
</div>

    <Footer />
    </div>
  )
}

export default Faq
