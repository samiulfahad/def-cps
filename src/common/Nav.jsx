import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import NavList from "./NavList"

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
          <Link to={"/"} className="">
            <p className="text-lg font-bold">City Public School, Durgapur</p>
            <p>Jemua, Durgapur, WB, India</p>
          </Link>
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
          <div className="bg-indigo-600 rounded-xl opacity-99 mx-auto mt-24 my-20 inset-0 z-20 absolute flex flex-col h-fit pb-4">
            <div className="flex gap-y-4 flex-col justify-center items-center pt-10 text-lg font-bold text-white ">
              {NavList.map((item, index) => (
                <>
                  <NavLink to={item.to} key={index}>
                    {" "}
                    <p onClick={MobileMenuH}>{item.label}</p>{" "}
                  </NavLink>
                  <hr className="border-2 w-2/3 mx-4"></hr>
                </>
              ))}
            </div>
            <div className="text-sm  text-gray-200 w-full flex flex-col justify-center items-center pt-10">
              <p>citypublicschool.def@gmail.com</p>
              <p>+918207284143</p>
              <p className="font-bold">City Public School, Durgapur</p>
            </div>
          </div>
        ) : null}
      </section>

      {/* Laptop Nav */}
      <section>
        <div className="hidden md:block py-6 px-20 pr-40 shadow-lg">
          <div className="flex justify-between items-center">
            <Link to={"/"}>
              <p className="text-2xl font-bold">City Public School</p>
              <p>Jemua, Durgapur-713209, WB, India</p>
            </Link>
            <div className="flex justify-center items-center gap-x-10 font-bold text-center">
              {NavList.map((item, index) => (
                <NavLink to={item.to} key={index}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Nav
