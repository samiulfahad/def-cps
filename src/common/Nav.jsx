/** @format */

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavList from "./NavList";

const Nav = () => {
  const [isOpen, seIsOpen] = useState(false);
  const MobileMenuH = () => {
    seIsOpen((old) => !isOpen);
  };

  const menuOpen = "block hamburger open";
  const menuClosed = "block hamburger";

  return (
    <>
      <section>
        <nav className="flex justify-between bg-blue-gray-400 md:hidden pb-4 pt-6 px-6">
          <Link to={"/"} className="text-white">
            <div onClick={() => seIsOpen(false)}>
              <p className="text-lg font-bold">City Public School, Durgapur</p>
              <p className="text-[12px] pr-2 whitespace-nowrap">Village:Jemua, Durgapur-713206, WB</p>
              <p className="text-[12px] pr-2 italic whitespace-nowrap">A unit of Durgapur Educational Foundation</p>
            </div>
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
          <div className="bg-blue-gray-500 rounded-xl opacity-99 mx-auto mt-24 my-20 inset-0 z-20 absolute flex flex-col h-fit pb-4">
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
        <div className="hidden min-w-full z-10 bg-blue-gray-100 md:block py-4 px-16 shadow-lg">
          <div className="flex justify-between items-center">
            <Link to={"/"} className="-ml-10">
              <p className="text-xl font-bold">City Public School</p>
              <p className="text-[12px] pr-2 whitespace-nowrap">Village:Jemua, Durgapur-713206, WB</p>
              <p className="text-[12px] pr-2 italic whitespace-nowrap">A unit of Durgapur Educational Foundation</p>
            </Link>
            <div className="flex mr-20 justify-center items-center gap-x-10 font-bold text-center">
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
  );
};

export default Nav;
