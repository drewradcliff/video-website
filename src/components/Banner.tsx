import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Banner() {
  return (
    <div className="text-center bg-teal-500 lg:bg-white text-white lg:text-black">
      <h1 className="text-4xl pt-32 lg:pt-4 lg:text-6xl font-bold">Make Your Day</h1>
      <p className="text-lg lg:text-xl">Real People. Real Videos.</p>
      <div className="w-56 my-8 mx-auto bg-red-500 text-lg text-white py-2 px-12 rounded-sm hover:bg-red-400 cursor-pointer">
        <FontAwesomeIcon icon={faPlay} /> Watch now
      </div>
      <div className="h-lg lg:flex">
        <div className="bg-teal-500 w-1/5 h-full"></div>
        <div className="bg-teal-600 w-1/5 h-full"></div>
        <div className="bg-teal-700 w-1/5 h-full"></div>
        <div className="bg-teal-800 w-1/5 h-full"></div>
        <div className="bg-teal-900 w-1/5 h-full"></div>
      </div>
    </div>
  )
}