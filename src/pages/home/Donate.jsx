import React from "react"
import { Link } from "react-router-dom"

const Donate = () => {
  return (
    <div className="mx-auto w-full">
      <div className="z-10 max-w-3xl mx-auto mb-8 px-6 py-10 bg-blue-gray-500 md:px-16 opacity-90">
        <div className="text-center">
          <h2 className="mb-6 text-4xl font-medium leading-10 tracking-tight text-white">
            We are collecting funds for our students
          </h2>
          <p className="mb-6 tracking-wide text-justify text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
            Prophet Muhammad (PBUH) encouraged immediate giving, assuring that charity does not deplete wealth but
            rather enhances it in the eyes of Allah. Ramadan, in particular, is highlighted as a time for increased
            generosity. Believers are urged to alleviate the suffering of others, with the promise of relief from
            distress on the Day of Judgment for those who extend a helping hand. These teachings underscore the
            transformative power of selfless giving, urging believers to give generously and trust in Allah's abundant
            rewards
          </p>
          <div className="flex flex-wrap justify-center">
            <Link
              to={"/donate"}
              className="w-full px-6 py-3 text-sm font-semibold text-white bg-blue-gray-600 rounded md:w-auto md:ml-2 hover:bg-blue-gray-700"
            >
              Visit Donate Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate
