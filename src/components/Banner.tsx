import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Banner() {
  return (
    <div className="text-center py-4">
      <h1 className="text-6xl font-bold">Make Your Day</h1>
      <p className="text-xl pb-8">Real People. Real Videos.</p>
      <div className="w-56 mx-auto bg-red-500 text-lg text-white py-2 px-12 rounded-sm hover:bg-red-400 cursor-pointer">
        <FontAwesomeIcon icon={faPlay} /> Watch now
      </div>
    </div>
  )
}