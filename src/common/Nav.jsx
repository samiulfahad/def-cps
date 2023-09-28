import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const Nav = () => {
  const [isOpen, seIsOpen] = useState(false)
  const MobileMenuH = () => {
    seIsOpen((old) => !isOpen)
  }

  const menuOpen = "block hamburger open"
  const menuClosed = "block hamburger"

  return (
    <>
      <section>
        <nav className="flex justify-between md:hidden mt-8 px-8">
          <div>
            <img src="/images/logo.svg" alt="" />
          </div>
          <button className={isOpen ? menuOpen : menuClosed} onClick={MobileMenuH}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </nav>
        {isOpen ? (
          <div className="bg-indigo-600 rounded-xl opacity-99 w-4/5 mx-auto my-20 inset-0 z-10 absolute">
            <div className="flex gap-y-4 flex-col justify-center items-center pt-10 text-lg font-bold text-white ">
              <p>Home</p> <hr className="border-2 w-2/3 mx-4"></hr>
              <p>About Us</p> <hr className="border-2 w-2/3 mx-4"></hr>
              <p>Contact</p> <hr className="border-2 w-2/3 mx-4"></hr>
              <p>Donate</p> <hr className="border-2 w-2/3 mx-4"></hr>
              <p>Committee</p>
            </div>
            <div className="text-sm  text-gray-200 w-full flex flex-col justify-center items-center absolute bottom-10">
              <p>ysir@gmail.com</p>
              <p>+91-XXXXX-XXXXX</p>
              <p>City Public School, Durgapur</p>
            </div>
          </div>
        ) : null}
      </section>

      {/* Laptop Nav */}
      <section>
        <div className="hidden md:block pt-6 px-20 pr-40">
          <div className="flex justify-between items-center">
            <div className="">
             <p className="text-2xl font-bold">City Public School</p>
             <p>Jemua, Durgapur-713209, WB, India</p>
             
            </div>
            <div className="flex justify-center items-center gap-x-10 font-bold text-center">
            <p>Home</p> 
              <p>About Us</p>
              <p>Contact</p>
              <p>Donate</p>
              <p>Committee</p>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Nav
