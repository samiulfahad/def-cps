import React from "react"
import Card from "./Card"
import Button from "./Button"
const Students = () => {
  return (
    <section className="bg-blue-50 min-h-screen">
      <h4 className="text-xl text-center pt-8">Total Students: 220</h4>
      <div className="flex flex-wrap justify-center items-center ">
        <Button cls="1" />
        <Button cls="2" />
        <Button cls="3" />
        <Button cls="4" />
        <Button cls="5" />
      </div>
      <div className="py-10">
        <div className="flex flex-wrap justify-center items-center ">
          <Card cls="1" total="40" male="20" female="20" />
          <Card cls="2" total="30" male="10" female="20" />
          <Card cls="3" total="35" male="20" female="15" />
          <Card cls="4" total="45" male="23" female="22" />
          <Card cls="5" total="50" male="30" female="20" />
        </div>
      </div>
    </section>
  )
}

export default Students
