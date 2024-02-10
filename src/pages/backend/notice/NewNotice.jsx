import { Input } from "@material-tailwind/react"
import React from "react"

const NewNotice = ({onTitleChange}) => {
  return (
    <form className="flex flex-col justify-center items-center -mt-16 my-8 gap-4">
      <Input type="text" label="Title" color="blue" onChange={(e)=> onTitleChange(e)}/>
      <Input type="file" label="Select a file" color="blue" accept=".pdf" />
    </form>
  )
}

export default NewNotice
