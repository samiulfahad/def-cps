import { Input, Textarea, Radio, Select, Option } from "@material-tailwind/react"
import { useState } from "react"

const AddStudent = () => {
  const [gender, setGender] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(gender)
  }

  return (
    <section className="py-16 bg-stone-100 font-poppins">
      <div className="max-w-4xl px-4 py-4 mx-auto bg-white border shadow-sm lg:py-4 md:px-6">
        <div className="mb-10">
          <h2 className="pb-2 mb-2 text-center text-xl font-bold text-gray-800 md:text-3xl">Add Student</h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
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
            <Input variant="static" type="file"  accept=".jpg, .jpeg, .png" label="Photo of Student" onChange={val => console.log(Object.values(val))}  />
          </div>

          <button type="submit" className="px-4 py-2 text-base text-gray-100 bg-blue-600 rounded hover:bg-blue-500">
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default AddStudent
