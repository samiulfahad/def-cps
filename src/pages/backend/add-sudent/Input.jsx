import React from "react"

const Input = ({label, type}) => {
  return (
    <div className="mb-6">
      <label className="mb-2">
        {label}
      </label>
      <input
        type={type}
        className="w-full px-4 py-3"
        required
      />
    </div>
  )
}

export default Input
