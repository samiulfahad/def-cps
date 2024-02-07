import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({cls}) => {
  return (
    <Link className='border-2 border-blue-500 rounded-xl px-4 py-2 m-4 text-blue-500 '> Class {cls} </Link>
  )
}

export default Button