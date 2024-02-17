import React, { useState } from "react"
import { Link } from "react-router-dom"

const Admission = () => {
    
  return (
    <section className="bg-blue-50 min-h-screen">
      <div className="flex flex-col justify-center items-center px-10 pt-10 md:pt-20">
        <h1 className="text-5xl py-8 font-bold text-blue-500 dark:text-white">
          A D M I S S I O N <span className="text-black">P R O C E D U R E </span>
        </h1>
        <div className="w-full px-10 md:max-w-5xl text-gray-600">
          <p className="text-justify">
            Admission to the City Public School is regulated under the norms of the Durgapur Educational Foundation (DEF
            Trust) and the CBSE board requirements. The academic year begins in April and ends in March and admissions
            for all classes begin from November and close by end of March of each year for the following academic year.
            Students who wish to study at City Public School must fulfil the criteria’s set by CBSE and the Durgapur
            Educational Foundation in order to be enrolled in successfully.
          </p>
          <h4 className="font-bold text-xl mt-10 text-gray-800 text-left"> Age Requirements </h4>
          <p className="text-justify pb-16">
            The child should have completed 3+ years of age as on April 1st in the current year to be admitted to
            Nursery, 4+ years in KG-I, 5+ years in KG-II and 6+ years for class 1 standard
          </p>
        </div>
        <Link to={"/admission-form"} className="-mt-4 mb-10 text-white bg-blue-500 hover:bg-white hover:text-blue-500 border-2 border-blue-500 duration-100 px-8 py-4 rounded-lg font-bold text-xl">
          Book A Seat
        </Link>
        
      </div>
    </section>
  )
}

export default Admission
