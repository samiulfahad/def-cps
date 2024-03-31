import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Input, Textarea, Select, Option } from "@material-tailwind/react"

const AdmissionForm = () => {
  const [gender, setGender] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(gender)
  }

  return (
    <section className="min-h-screen w-full py-10 bg-blue-50 font-poppins">
      <div className="md:w-2/5 mx-auto bg-white border rounded-md shadow-lg py-10 md:px-10">
        <div className="mb-10 text-justify">
          <h1 className="text-xl md:text-2xl font-bold text-center text-blue-gray-500 dark:text-white">
            <span className="text-black">Online </span> A D M I S S I O N <span className="text-black">Form </span>
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="px-8 flex flex-col space-y-4">
          <Input  label="Full Name" type="text" color="blue" />
          <Input  label="Birth Date" type="date" color="blue" />
          <Select color="blue" label="Gender" onChange={(val) => setGender(val)} value={gender}>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
          <Select label="Religion" color="blue">
            <Option>Islam</Option>
            <Option>Hindu</Option>
            <Option>Christian</Option>
          </Select>

          <Input label="Father's Name" type="text" color="blue" />
          <Input label="Mother's Name" type="text" color="blue" />

          <Input label="Guardian's Name" type="text" color="blue" />
          <Input label="Contact Number" type="number" color="blue" />

          <Textarea label="Address" color="blue" />

          <div className="flex justify-center items-center space-x-8">
            <button
              type="submit"
              className="text-white bg-blue-gray-500 hover:bg-white hover:text-blue-gray-500 border-2 border-blue-gray-500 duration-100 px-6 py-3 text-center rounded-lg font-bold text-xl"
            >
              Submit
            </button>
            <Link
              to={"/admission"}
              className="bg-white text-blue-gray-500 border-2 border-blue-gray-500 px-6 py-3 text-center rounded-lg font-bold text-xl"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AdmissionForm
