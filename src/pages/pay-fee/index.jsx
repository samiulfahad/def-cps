import { Checkbox, Input, Radio, Select } from "@material-tailwind/react"
import React from "react"

const PayFee = () => {
  return (
    <section className="bg-blue-50 min-h-screen">
      <div className="flex flex-col justify-center items-center max-w-lg mx-auto py-20 space-y-4">
        <p className="text-xl text center py-2">Enter Registration Number for all types of payment</p>
        <Input label="Enter Registration Number" color="blue" size="lg" />
        <div className="p-4 shadow-2xl bg-gray-50 rounded-md">
          <p className="text-lg">Student's Name: <span className="font-bold"> Abrar Faysal</span></p>
          <div className="flex space-x-4">
              <p>Class- <span className="font-bold"> Five</span></p>
               <p>Roll No. - <span className="font-bold">05</span></p>
          </div>
          <p className="font-bold text-red-500">Total Unpaid bills: 2000 INRs</p>
        </div>
        <div className="text-sm font-bold">
          <p>You have following unpaid bills. After selecting bills, click on "Pay Now" button</p>
          <Checkbox label="Monthly Fee - January (300)" />
          <Checkbox label="Monthly Fee - February (300)" />
          <Checkbox label="Half yearly Exam Fee (600)" />
          <Checkbox label="Session Fee (1200)" />
        </div>
      </div>
      <div className="mx-auto w-full text-center -mt-20">
        <p className="text-lg font-bold text">Total Selected - 1500 INR</p>
        <p className="text-sm font-bold text-red-500">Due - 500 INR </p>
        <button className="px-8 py-2 my-4 font-bold rounded-lg text-white bg-blue-500 border-2 border-blue-500 hover:text-black hover:bg-blue-50 duration-300">Pay Now</button>
      </div>
    </section>
  )
}

export default PayFee
