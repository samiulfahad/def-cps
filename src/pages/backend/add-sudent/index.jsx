import { Input, Textarea, Radio, Select, Option } from "@material-tailwind/react"
import { useState } from "react"
import { Link } from "react-router-dom"

const AddStudent = () => {
  const [gender, setGender] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(gender)
  }

  return (
    <section className="min-h-screen pt-8 bg-blue-50 font-poppins">
      <div className="max-w-4xl px-4 py-8 mx-auto bg-white border shadow-sm lg:py-4 md:px-6">
        <div className="mb-10">
          <h1 className="text-5xl py-4 font-bold text-center text-blue-500 dark:text-white">
            <span className="text-black">Online </span> A D M I S S I O N <span className="text-black">Form </span>
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 -mt-4">
          <div className="flex justify-center items-center space-x-8">
            <Input label="Full Name" type="text" color="blue" />
            <Input label="Birth Date" type="date" color="blue" />
            <Input label="Registration Number" color="blue" />
          </div>

          <div className="flex justify-center items-center space-x-8">
            <Select color="blue" label="Gender" onChange={(val) => setGender(val)} value={gender}>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>

            <Select label="Religion" color="blue">
              <Option>Islam</Option>
              <Option>Hindu</Option>
              <Option>Christian</Option>
            </Select>
          </div>

          <div className="flex justify-center items-center space-x-8">
            <Input label="Father's Name" type="text" color="blue" />
            <Input label="Mother's Name" type="text" color="blue" />
          </div>

          <div className="flex justify-center items-center space-x-8">
            <Input label="Guardian's Name" type="text" color="blue" />
            <Input label="Contact Number" type="number" color="blue" />
          </div>
          <div className="flex justify-center items-center space-x-8">
            <Textarea label="Address" color="blue" />
            {/* <Input
              variant="static"
              type="file"
              accept=".jpg, .jpeg, .png"
              label="Photo of Student"
              onChange={(val) => console.log(Object.values(val))}
            /> */}
          </div>

          <div className="flex justify-center items-center space-x-8">
            <button
              type="submit"
              className="text-white bg-blue-500 hover:bg-white hover:text-blue-500 border-2 border-blue-500 duration-100 px-6 py-3 text-center rounded-lg font-bold text-xl"
            >
              Send Admission Request
            </button>
            <Link to={"/admission"}
              className="bg-white text-blue-500 border-2 border-blue-500 px-6 py-3 text-center rounded-lg font-bold text-xl"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddStudent
